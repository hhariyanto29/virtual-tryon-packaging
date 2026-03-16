import { PackagingTemplate } from './types'

export const defaultTemplates: PackagingTemplate[] = [
  // Box Templates
  {
    id: 'standard-box',
    name: 'Standard Shipping Box',
    category: 'box',
    thumbnail: '/templates/box-standard.jpg',
    description: 'Standard corrugated shipping box with 6 textureable faces',
    geometry: {
      type: 'box',
      dimensions: {
        width: 2.5,
        height: 3.5,
        depth: 2,
        segments: 1
      }
    },
    defaultMaterial: {
      type: 'matte',
      color: '#f5f5f5',
      roughness: 0.8,
      metalness: 0.2
    },
    faces: [
      { id: 'front', name: 'Front', uvIndex: 0, textureSize: { width: 2.5, height: 3.5 }, canReceiveTexture: true },
      { id: 'back', name: 'Back', uvIndex: 1, textureSize: { width: 2.5, height: 3.5 }, canReceiveTexture: true },
      { id: 'left', name: 'Left Side', uvIndex: 2, textureSize: { width: 2, height: 3.5 }, canReceiveTexture: true },
      { id: 'right', name: 'Right Side', uvIndex: 3, textureSize: { width: 2, height: 3.5 }, canReceiveTexture: true },
      { id: 'top', name: 'Top', uvIndex: 4, textureSize: { width: 2.5, height: 2 }, canReceiveTexture: true },
      { id: 'bottom', name: 'Bottom', uvIndex: 5, textureSize: { width: 2.5, height: 2 }, canReceiveTexture: true }
    ]
  },
  
  // Bottle Template
  {
    id: 'plastic-bottle',
    name: 'Plastic Beverage Bottle',
    category: 'bottle',
    thumbnail: '/templates/bottle-plastic.jpg',
    description: 'Standard PET plastic bottle with label area',
    geometry: {
      type: 'bottle',
      dimensions: {
        width: 1, // Not used for bottle
        height: 4,
        depth: 1, // Not used for bottle
        radius: 0.6,
        segments: 32
      }
    },
    defaultMaterial: {
      type: 'glossy',
      color: '#e0f7fa',
      roughness: 0.2,
      metalness: 0.1
    },
    faces: [
      { id: 'label', name: 'Label Area', uvIndex: 0, textureSize: { width: 3.77, height: 1.6 }, canReceiveTexture: true },
      { id: 'body', name: 'Bottle Body', uvIndex: 1, textureSize: { width: 3.77, height: 4 }, canReceiveTexture: false }
    ]
  },
  
  // Pouch Template
  {
    id: 'standing-pouch',
    name: 'Standing Pouch',
    category: 'pouch',
    thumbnail: '/templates/pouch-standing.jpg',
    description: 'Flexible standing pouch with gussets',
    geometry: {
      type: 'pouch',
      dimensions: {
        width: 3,
        height: 4,
        depth: 1,
        segments: 32
      }
    },
    defaultMaterial: {
      type: 'matte',
      color: '#ffffff',
      roughness: 0.7,
      metalness: 0.1
    },
    faces: [
      { id: 'front', name: 'Front Panel', uvIndex: 0, textureSize: { width: 3, height: 4 }, canReceiveTexture: true },
      { id: 'back', name: 'Back Panel', uvIndex: 1, textureSize: { width: 3, height: 4 }, canReceiveTexture: true }
    ]
  },
  
  // Tube Template
  {
    id: 'cosmetic-tube',
    name: 'Cosmetic Tube',
    category: 'tube',
    thumbnail: '/templates/tube-cosmetic.jpg',
    description: 'Squeeze tube for creams and gels',
    geometry: {
      type: 'tube',
      dimensions: {
        width: 1, // Not used for tube
        height: 3.5,
        depth: 0.1, // Thickness
        radius: 0.8,
        segments: 32
      }
    },
    defaultMaterial: {
      type: 'matte',
      color: '#ffffff',
      roughness: 0.6,
      metalness: 0.2
    },
    faces: [
      { id: 'label', name: 'Label Wrap', uvIndex: 0, textureSize: { width: 5.03, height: 2.1 }, canReceiveTexture: true },
      { id: 'body', name: 'Tube Body', uvIndex: 1, textureSize: { width: 5.03, height: 3.5 }, canReceiveTexture: false }
    ]
  },
  
  // Bag Template
  {
    id: 'paper-bag',
    name: 'Paper Shopping Bag',
    category: 'bag',
    thumbnail: '/templates/bag-paper.jpg',
    description: 'Kraft paper shopping bag with handles',
    geometry: {
      type: 'bag',
      dimensions: {
        width: 3,
        height: 4,
        depth: 1.5,
        segments: 1
      }
    },
    defaultMaterial: {
      type: 'matte',
      color: '#d7ccc8',
      roughness: 0.9,
      metalness: 0
    },
    faces: [
      { id: 'front', name: 'Front Panel', uvIndex: 0, textureSize: { width: 3, height: 4 }, canReceiveTexture: true },
      { id: 'back', name: 'Back Panel', uvIndex: 1, textureSize: { width: 3, height: 4 }, canReceiveTexture: true },
      { id: 'left', name: 'Left Side', uvIndex: 2, textureSize: { width: 1.5, height: 4 }, canReceiveTexture: true },
      { id: 'right', name: 'Right Side', uvIndex: 3, textureSize: { width: 1.5, height: 4 }, canReceiveTexture: true }
    ]
  }
]

// Export individual templates for easy access
export const standardBoxTemplate = defaultTemplates[0]
export const plasticBottleTemplate = defaultTemplates[1]
export const standingPouchTemplate = defaultTemplates[2]
export const cosmeticTubeTemplate = defaultTemplates[3]
export const paperBagTemplate = defaultTemplates[4]