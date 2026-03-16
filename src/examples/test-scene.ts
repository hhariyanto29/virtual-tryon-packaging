// Example usage of the upgraded 3D rendering engine

import { SceneManager } from '../engine/SceneManager'
import { BoxMockup } from '../engine/BoxMockup'

export async function setupTestScene(canvas: HTMLCanvasElement) {
  // Initialize scene manager
  const sceneManager = new SceneManager(canvas)
  
  // Create box mockup
  const boxMockup = new BoxMockup()
  sceneManager.getScene().add(boxMockup.getMesh())
  
  // Test lighting presets
  console.log('Testing lighting presets...')
  sceneManager.setLightingPreset('studio')
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  sceneManager.setLightingPreset('outdoor')
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  sceneManager.setLightingPreset('dramatic')
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Test camera presets
  console.log('Testing camera presets...')
  sceneManager.setCameraPreset('front', 1000)
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  sceneManager.setCameraPreset('top', 1000)
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  sceneManager.setCameraPreset('isometric', 1000)
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  sceneManager.setCameraPreset('reset', 1000)
  
  // Test box mockup features
  console.log('Testing box mockup features...')
  
  // Test material types
  boxMockup.setMaterialType('matte')
  await new Promise(resolve => setTimeout(resolve, 500))
  
  boxMockup.setMaterialType('glossy')
  await new Promise(resolve => setTimeout(resolve, 500))
  
  boxMockup.setMaterialType('metallic')
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Test edges overlay
  boxMockup.toggleEdgesOverlay(true)
  await new Promise(resolve => setTimeout(resolve, 1000))
  boxMockup.toggleEdgesOverlay(false)
  
  // Start animation
  sceneManager.startAnimation()
  
  // Enable auto-rotation
  sceneManager.setAutoRotate(true, 0.5)
  
  return {
    sceneManager,
    boxMockup,
    
    // Helper methods for testing
    async testTextureLoading() {
      console.log('Testing texture loading...')
      
      // Example texture URLs (replace with actual textures)
      const testTextureUrl = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'
      
      try {
        await boxMockup.applyTexture('front', testTextureUrl)
        console.log('Front texture loaded successfully')
        
        await boxMockup.applyTextureToAll(testTextureUrl)
        console.log('All faces textured successfully')
        
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        boxMockup.resetTextures()
        console.log('Textures reset successfully')
      } catch (error) {
        console.error('Texture loading test failed:', error)
      }
    },
    
    cleanup() {
      sceneManager.dispose()
      boxMockup.dispose()
    }
  }
}