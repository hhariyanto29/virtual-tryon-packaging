import { PackagingTemplate } from './types'

export const defaultTemplates: PackagingTemplate[] = [
  // 1. Gelas Plastik / Paper Cup
  {
    id: 'paper-cup',
    name: 'Gelas Plastik atau Gelas Kertas',
    category: 'cup',
    thumbnail: '/templates/cup-paper.jpg',
    description: 'Gelas kertas berkualitas tinggi untuk minuman panas dan dingin.',
    geometry: {
      type: 'cup',
      dimensions: {
        width: 2.5, // Not used for cup
        height: 2.5,
        depth: 1.2, // Not used for cup
        radiusTop: 1.2,
        radiusBottom: 0.9,
        radialSegments: 32,
        heightSegments: 8
      }
    },
    defaultMaterial: {
      type: 'glossy',
      color: '#ffffff',
      roughness: 0.3,
      metalness: 0.1
    },
    faces: [
      { 
        id: 'label', 
        name: 'Area Label', 
        uvIndex: 0, 
        textureSize: { 
          width: 6.6, // Circumference: π * 2 * ((1.2 + 0.9) / 2)
          height: 1.75 // 70% of height
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'body', 
        name: 'Badan Gelas', 
        uvIndex: 1, 
        textureSize: { 
          width: 6.6,
          height: 2.5 
        }, 
        canReceiveTexture: false 
      }
    ],
    tags: ['Panas & Dingin', 'Food Grade', 'Dapat Dikustomisasi']
  },
  
  // 2. Paper Bag (updated)
  {
    id: 'paper-bag',
    name: 'Paper Bag / Tas Kertas',
    category: 'bag',
    thumbnail: '/templates/bag-paper.jpg',
    description: 'Tas kertas belanja dengan handle untuk kemasan retail.',
    geometry: {
      type: 'bag',
      dimensions: {
        width: 2.5,
        height: 3.5,
        depth: 1.2,
        handleRadius: 0.1,
        handleHeight: 0.3
      }
    },
    defaultMaterial: {
      type: 'matte',
      color: '#d7ccc8',
      roughness: 0.9,
      metalness: 0
    },
    faces: [
      { 
        id: 'front', 
        name: 'Panel Depan', 
        uvIndex: 0, 
        textureSize: { 
          width: 2.5, 
          height: 3.5 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'back', 
        name: 'Panel Belakang', 
        uvIndex: 1, 
        textureSize: { 
          width: 2.5, 
          height: 3.5 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'left', 
        name: 'Sisi Kiri', 
        uvIndex: 2, 
        textureSize: { 
          width: 1.2, 
          height: 3.5 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'right', 
        name: 'Sisi Kanan', 
        uvIndex: 3, 
        textureSize: { 
          width: 1.2, 
          height: 3.5 
        }, 
        canReceiveTexture: true 
      }
    ],
    tags: ['Retail', 'Eco-Friendly', 'Dapat Didaur Ulang']
  },
  
  // 3. Food Container
  {
    id: 'food-container',
    name: 'Food Container / Wadah Makanan',
    category: 'container',
    thumbnail: '/templates/container-food.jpg',
    description: 'Wadah makanan praktis dengan tutup untuk takeaway.',
    geometry: {
      type: 'container',
      dimensions: {
        width: 3,
        height: 1.2,
        depth: 2.5,
        lidThickness: 0.12
      }
    },
    defaultMaterial: {
      type: 'matte',
      color: '#ffffff',
      roughness: 0.6,
      metalness: 0.1
    },
    faces: [
      { 
        id: 'lid', 
        name: 'Tutup Atas', 
        uvIndex: 0, 
        textureSize: { 
          width: 3.06, // width * 1.02
          height: 2.55 // depth * 1.02
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'front', 
        name: 'Panel Depan', 
        uvIndex: 1, 
        textureSize: { 
          width: 3, 
          height: 1.2 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'back', 
        name: 'Panel Belakang', 
        uvIndex: 2, 
        textureSize: { 
          width: 3, 
          height: 1.2 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'left', 
        name: 'Sisi Kiri', 
        uvIndex: 3, 
        textureSize: { 
          width: 2.5, 
          height: 1.2 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'right', 
        name: 'Sisi Kanan', 
        uvIndex: 4, 
        textureSize: { 
          width: 2.5, 
          height: 1.2 
        }, 
        canReceiveTexture: true 
      }
    ],
    tags: ['Takeaway', 'Microwave Safe', 'Kedap Udara']
  },
  
  // 4. Paper Bowl
  {
    id: 'paper-bowl',
    name: 'Paper Bowl / Mangkok Kertas',
    category: 'bowl',
    thumbnail: '/templates/bowl-paper.jpg',
    description: 'Mangkok kertas untuk makanan berkuah seperti sup dan mie.',
    geometry: {
      type: 'bowl',
      dimensions: {
        width: 2.5, // Not used for bowl
        height: 1.8,
        depth: 1.5, // Not used for bowl
        radiusTop: 1.2,
        radiusBottom: 0.6,
        thickness: 0.09,
        segments: 32
      }
    },
    defaultMaterial: {
      type: 'matte',
      color: '#f5f5f5',
      roughness: 0.8,
      metalness: 0
    },
    faces: [
      { 
        id: 'wrap', 
        name: 'Area Label', 
        uvIndex: 0, 
        textureSize: { 
          width: 5.65, // Circumference: π * 2 * ((1.08 + 0.54) / 2)
          height: 1.44 // 80% of height
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'body', 
        name: 'Badan Mangkok', 
        uvIndex: 1, 
        textureSize: { 
          width: 5.65,
          height: 1.8 
        }, 
        canReceiveTexture: false 
      }
    ],
    tags: ['Makanan Berkuah', 'Food Grade', 'Tahan Panas']
  },
  
  // 5. Custom Packaging / Standing Pouch
  {
    id: 'standing-pouch',
    name: 'Standing Pouch / Kemasan Berdiri',
    category: 'pouch',
    thumbnail: '/templates/pouch-standing.jpg',
    description: 'Kemasan fleksibel yang dapat berdiri sendiri untuk produk cair atau bubuk.',
    geometry: {
      type: 'pouch',
      dimensions: {
        width: 2.8,
        height: 4,
        depth: 1,
        curveHeight: 0.6,
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
      { 
        id: 'front', 
        name: 'Panel Depan', 
        uvIndex: 0, 
        textureSize: { 
          width: 2.8, 
          height: 4 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'back', 
        name: 'Panel Belakang', 
        uvIndex: 1, 
        textureSize: { 
          width: 2.8, 
          height: 4 
        }, 
        canReceiveTexture: true 
      }
    ],
    tags: ['Flexible', 'Standing', 'Resealable']
  },
  
  // 6. Takeaway Box
  {
    id: 'takeaway-box',
    name: 'Takeaway Box / Kotak Bawa Pulang',
    category: 'takeaway',
    thumbnail: '/templates/box-takeaway.jpg',
    description: 'Kotak makanan dengan tutup flip-top untuk takeaway.',
    geometry: {
      type: 'takeaway',
      dimensions: {
        width: 2.5,
        height: 1.5,
        depth: 2.5,
        lidThickness: 0.15,
        hingeAngle: 0.26 // ~15 degrees in radians
      }
    },
    defaultMaterial: {
      type: 'matte',
      color: '#f5f5dc',
      roughness: 0.85,
      metalness: 0
    },
    faces: [
      { 
        id: 'lid', 
        name: 'Tutup Atas', 
        uvIndex: 0, 
        textureSize: { 
          width: 2.55, // width * 1.02
          height: 2.55 // depth * 1.02
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'front', 
        name: 'Panel Depan', 
        uvIndex: 1, 
        textureSize: { 
          width: 2.5, 
          height: 1.5 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'back', 
        name: 'Panel Belakang', 
        uvIndex: 2, 
        textureSize: { 
          width: 2.5, 
          height: 1.5 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'left', 
        name: 'Sisi Kiri', 
        uvIndex: 3, 
        textureSize: { 
          width: 2.5, 
          height: 1.5 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'right', 
        name: 'Sisi Kanan', 
        uvIndex: 4, 
        textureSize: { 
          width: 2.5, 
          height: 1.5 
        }, 
        canReceiveTexture: true 
      }
    ],
    tags: ['Takeaway', 'Cardboard', 'Ventilated']
  },
  
  // 7. Perfume Bottle
  {
    id: 'perfume-bottle',
    name: 'Perfume Bottle / Botol Parfum',
    category: 'perfume',
    thumbnail: '/templates/bottle-perfume.jpg',
    description: 'Botol parfum elegan dengan tampilan kristal/glass.',
    geometry: {
      type: 'perfume',
      dimensions: {
        width: 1.5, // Not used for bottle
        height: 4.5,
        depth: 1.5, // Not used for bottle
        baseRadius: 0.8,
        neckRadius: 0.3,
        bodyRadius: 1.0,
        neckHeight: 0.8,
        segments: 32
      }
    },
    defaultMaterial: {
      type: 'glossy',
      color: '#ffffff',
      roughness: 0.05,
      metalness: 0.1
    },
    faces: [
      { 
        id: 'label', 
        name: 'Area Label', 
        uvIndex: 0, 
        textureSize: { 
          width: 4.4, // 70% of circumference: 0.7 * π * 2 * 1.0
          height: 2.4 // 60% of body height
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'body', 
        name: 'Badan Botol', 
        uvIndex: 1, 
        textureSize: { 
          width: 6.28, // Full circumference: π * 2 * 1.0
          height: 4.5 
        }, 
        canReceiveTexture: false 
      }
    ],
    tags: ['Luxury', 'Glass Look', 'Elegant']
  }
]

// Export individual templates for easy access
export const paperCupTemplate = defaultTemplates[0]
export const paperBagTemplate = defaultTemplates[1]
export const foodContainerTemplate = defaultTemplates[2]
export const paperBowlTemplate = defaultTemplates[3]
export const standingPouchTemplate = defaultTemplates[4]
export const takeawayBoxTemplate = defaultTemplates[5]
export const perfumeBottleTemplate = defaultTemplates[6]