export interface Template {
  id: string
  name: string
  description: string
  dimensions: {
    width: number
    height: number
    depth: number
  }
  previewColor: string
  category: 'box' | 'bottle' | 'pouch' | 'custom'
}

export const templates: Template[] = [
  {
    id: 'standard-box',
    name: 'Standard Box',
    description: 'Standard shipping box proportions',
    dimensions: { width: 2, height: 3, depth: 1.5 },
    previewColor: '#4f46e5',
    category: 'box'
  },
  {
    id: 'slim-box',
    name: 'Slim Box',
    description: 'Slim packaging for cosmetics or electronics',
    dimensions: { width: 1.5, height: 4, depth: 1 },
    previewColor: '#10b981',
    category: 'box'
  },
  {
    id: 'cube-box',
    name: 'Cube Box',
    description: 'Perfect cube for gift packaging',
    dimensions: { width: 2, height: 2, depth: 2 },
    previewColor: '#f59e0b',
    category: 'box'
  },
  {
    id: 'large-box',
    name: 'Large Box',
    description: 'Large storage or shipping box',
    dimensions: { width: 3, height: 4, depth: 2 },
    previewColor: '#ef4444',
    category: 'box'
  },
  {
    id: 'small-box',
    name: 'Small Box',
    description: 'Small jewelry or accessory box',
    dimensions: { width: 1, height: 1.5, depth: 0.8 },
    previewColor: '#8b5cf6',
    category: 'box'
  }
]

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id)
}

export const getTemplatesByCategory = (category: Template['category']): Template[] => {
  return templates.filter(template => template.category === category)
}