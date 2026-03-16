# Nemu Mockup Tool

A 3D packaging mockup generator built with Vue 3, Three.js, and Tailwind CSS. Create professional packaging mockups with real-time 3D preview.

## Features

- 🎨 **Real-time 3D Preview**: Interactive 3D box with OrbitControls
- 🖼️ **Texture Upload**: Apply images to any face of the box
- 🎨 **Color Customization**: Change colors for each face
- 📐 **Dimension Control**: Adjust width, height, and depth
- 📦 **Pre-built Templates**: Quick-start with common box proportions
- 💾 **Export Options**: Download as PNG or 3D model (GLB)
- 🐳 **Docker Support**: Easy deployment with Docker and Docker Compose

## Tech Stack

- **Frontend**: Vue 3 (Composition API) + TypeScript
- **3D Engine**: Three.js with OrbitControls
- **Styling**: Tailwind CSS v4
- **State Management**: Pinia
- **Build Tool**: Vite
- **Containerization**: Docker + Docker Compose

## Project Structure

```
nemu-mockup-tool/
├── src/
│   ├── components/     # Vue components
│   │   └── MockupCanvas.vue
│   ├── engine/         # Three.js core
│   │   ├── SceneManager.ts
│   │   └── BoxMockup.ts
│   ├── composables/    # Vue composables
│   │   └── useThreeScene.ts
│   ├── stores/         # Pinia stores
│   │   └── mockupStore.ts
│   ├── templates/      # Box templates
│   │   └── index.ts
│   ├── views/          # Page views
│   │   └── EditorView.vue
│   ├── assets/         # Static assets
│   │   └── style.css
│   ├── App.vue         # Root component
│   └── main.ts         # Entry point
├── public/             # Static files
└── dist/               # Build output
```

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn
- Docker and Docker Compose (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nemu-mockup-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open browser at `http://localhost:5173`

### Using Docker

#### Development
```bash
docker-compose up nemu-mockup-dev
```

#### Production
```bash
docker-compose up nemu-mockup-tool
```

The production build will be available at `http://localhost:8080`

## Usage

1. **Select a Template**: Choose from pre-defined box templates
2. **Adjust Dimensions**: Fine-tune width, height, and depth
3. **Customize Faces**:
   - Select a face (front, back, left, right, top, bottom)
   - Upload texture images
   - Change colors
   - Adjust opacity
4. **3D Interaction**:
   - Drag to rotate
   - Scroll to zoom
   - Right-click drag to pan
5. **Export**: Download as PNG or 3D model

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

### Key Implementation Details

#### Three.js Integration
- `SceneManager.ts`: Handles scene, camera, renderer, lights, and controls
- `BoxMockup.ts`: Manages box geometry, materials, and textures
- `MockupCanvas.vue`: Vue component wrapper for Three.js canvas

#### State Management
- `mockupStore.ts`: Centralized state for mockup properties
- Reactive updates between UI and 3D scene

#### Responsive Design
- Tailwind CSS for responsive layouts
- Canvas resizes with window changes

## Deployment

### Live Demo
- **GitHub Pages**: https://hhariyanto29.github.io/virtual-tryon-packaging/
- **Local Preview**: http://207.148.30.206:4173/virtual-tryon-packaging/

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to GitHub Pages
```bash
npm run deploy
```

This will deploy the `dist/` folder to the `gh-pages` branch.

### Local Preview Server
```bash
npm run preview -- --host 0.0.0.0 --port 4173
```

### Docker Production Build
```bash
docker build -t nemu-mockup-tool .
docker run -p 8080:80 nemu-mockup-tool
```

## API Reference

### BoxMockup Class
```typescript
applyTexture(face: BoxFace, imageUrl: string): Promise<void>
setColor(face: BoxFace, color: number | string): void
clearTexture(face: BoxFace): void
```

### Mockup Store
```typescript
setDimensions(width: number, height: number, depth: number): void
setTexture(face: BoxFace, texture: TextureData): void
setColor(face: BoxFace, color: string): void
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [Vue.js](https://vuejs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Inspired by Pacdora and similar packaging mockup tools