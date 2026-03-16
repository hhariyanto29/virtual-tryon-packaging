import * as THREE from 'three';

export interface ExportOptions {
  format: 'png' | 'jpg';
  quality: number;
  width: number;
  height: number;
  background: 'transparent' | 'white' | string;
  resolutionMultiplier: 1 | 2 | 4;
}

export interface BatchExportOptions {
  angles: Array<'front' | 'back' | 'top' | 'isometric'>;
  format: 'png' | 'jpg';
  quality: number;
  width: number;
  height: number;
  background: 'transparent' | 'white' | string;
  resolutionMultiplier: 1 | 2 | 4;
}

export class ExportService {
  /**
   * Capture canvas and return as Blob
   */
  public static async captureCanvas(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    options: ExportOptions
  ): Promise<Blob> {
    return new Promise((resolve, reject) => {
      try {
        const {
          format,
          quality,
          width,
          height,
          background,
          resolutionMultiplier
        } = options;

        // Save original renderer settings
        const originalSize = new THREE.Vector2();
        renderer.getSize(originalSize);
        const originalPixelRatio = renderer.getPixelRatio();
        const originalClearColor = new THREE.Color();
        const originalClearAlpha = renderer.getClearAlpha();
        renderer.getClearColor(originalClearColor);

        // Create offscreen render target for high-res rendering
        const renderWidth = width * resolutionMultiplier;
        const renderHeight = height * resolutionMultiplier;

        // Set up render target
        const renderTarget = new THREE.WebGLRenderTarget(renderWidth, renderHeight, {
          samples: 4, // MSAA for better quality
          format: format === 'png' ? THREE.RGBAFormat : THREE.RGBFormat,
          type: THREE.UnsignedByteType
        });

        // Set background
        if (background === 'transparent') {
          renderer.setClearColor(0x000000, 0);
        } else if (background === 'white') {
          renderer.setClearColor(0xffffff, 1);
        } else {
          // Parse custom color
          const color = new THREE.Color(background);
          renderer.setClearColor(color, 1);
        }

        // Render to offscreen target
        renderer.setRenderTarget(renderTarget);
        renderer.setSize(renderWidth, renderHeight);
        renderer.setPixelRatio(1); // Use 1 for consistent rendering
        renderer.render(scene, camera);

        // Read pixels from render target
        const buffer = new Uint8Array(renderWidth * renderHeight * 4);
        renderer.readRenderTargetPixels(renderTarget, 0, 0, renderWidth, renderHeight, buffer);

        // Create canvas for final image
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          throw new Error('Failed to get canvas context');
        }

        // Create ImageData from buffer
        const imageData = ctx.createImageData(renderWidth, renderHeight);
        imageData.data.set(buffer);

        // Draw to canvas with scaling
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = renderWidth;
        tempCanvas.height = renderHeight;
        const tempCtx = tempCanvas.getContext('2d');
        
        if (!tempCtx) {
          throw new Error('Failed to get temp canvas context');
        }

        tempCtx.putImageData(imageData, 0, 0);
        
        // Scale down to final size with smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(tempCanvas, 0, 0, renderWidth, renderHeight, 0, 0, width, height);

        // Convert to blob
        canvas.toBlob(
          (blob) => {
            if (blob) {
              // Restore original renderer settings
              renderer.setRenderTarget(null);
              renderer.setSize(originalSize.width, originalSize.height);
              renderer.setPixelRatio(originalPixelRatio);
              renderer.setClearColor(originalClearColor, originalClearAlpha);
              
              // Dispose render target
              renderTarget.dispose();
              
              resolve(blob);
            } else {
              reject(new Error('Failed to create blob'));
            }
          },
          format === 'png' ? 'image/png' : 'image/jpeg',
          format === 'jpg' ? quality : undefined
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Generate filename based on template and timestamp
   */
  public static generateFilename(
    templateName: string = 'mockup',
    format: 'png' | 'jpg',
    timestamp?: Date
  ): string {
    const now = timestamp || new Date();
    const dateStr = now.toISOString()
      .replace(/[:.]/g, '-')
      .replace('T', '_')
      .slice(0, 19);
    
    const templateSlug = templateName.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    return `${templateSlug}-${dateStr}.${format}`;
  }

  /**
   * Download blob as file
   */
  public static downloadBlob(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Batch export multiple angles
   */
  public static async batchExport(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    options: BatchExportOptions
  ): Promise<Blob[]> {
    const { angles, ...exportOptions } = options;
    const blobs: Blob[] = [];

    // Save original camera position
    const originalPosition = camera.position.clone();
    const originalRotation = camera.rotation.clone();

    for (const angle of angles) {
      // Set camera position based on angle
      this.setCameraForAngle(camera, angle);

      // Capture canvas
      const blob = await this.captureCanvas(renderer, scene, camera, exportOptions);
      blobs.push(blob);
    }

    // Restore original camera position
    camera.position.copy(originalPosition);
    camera.rotation.copy(originalRotation);

    return blobs;
  }

  /**
   * Set camera position for specific angle
   */
  private static setCameraForAngle(camera: THREE.PerspectiveCamera, angle: 'front' | 'back' | 'top' | 'isometric'): void {
    const distance = 15;
    
    switch (angle) {
      case 'front':
        camera.position.set(0, 0, distance);
        camera.lookAt(0, 0, 0);
        break;
      case 'back':
        camera.position.set(0, 0, -distance);
        camera.lookAt(0, 0, 0);
        break;
      case 'top':
        camera.position.set(0, distance, 0);
        camera.lookAt(0, 0, 0);
        break;
      case 'isometric':
        camera.position.set(distance, distance, distance);
        camera.lookAt(0, 0, 0);
        break;
    }
  }

  /**
   * Create ZIP file from multiple blobs
   */
  public static async createZip(
    blobs: Blob[],
    filenames: string[]
  ): Promise<Blob> {
    try {
      // Dynamically import JSZip to avoid bundle size issues
      const JSZip = await import('jszip');
      const zip = new JSZip.default();
      
      // Add each blob to zip
      for (let i = 0; i < blobs.length; i++) {
        zip.file(filenames[i], blobs[i]);
      }
      
      // Generate zip file
      return await zip.generateAsync({ type: 'blob' });
    } catch (error) {
      console.error('Failed to create ZIP:', error);
      throw new Error('Failed to create ZIP archive. Please try exporting individual images.');
    }
  }
}