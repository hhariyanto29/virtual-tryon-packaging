import { PackagingTemplate, PackagingCategory } from './types'
import { defaultTemplates } from './defaults'

export type { PackagingCategory }

class TemplateRegistry {
  private templates: Map<string, PackagingTemplate> = new Map()
  private templatesByCategory: Map<PackagingCategory, PackagingTemplate[]> = new Map()

  constructor() {
    this.initialize()
  }

  private initialize(): void {
    // Register all default templates
    defaultTemplates.forEach(template => {
      this.registerTemplate(template)
    })
  }

  public registerTemplate(template: PackagingTemplate): void {
    this.templates.set(template.id, template)
    
    // Update category index
    const categoryTemplates = this.templatesByCategory.get(template.category) || []
    categoryTemplates.push(template)
    this.templatesByCategory.set(template.category, categoryTemplates)
  }

  public getTemplate(id: string): PackagingTemplate | undefined {
    return this.templates.get(id)
  }

  public getTemplatesByCategory(category: PackagingCategory): PackagingTemplate[] {
    return this.templatesByCategory.get(category) || []
  }

  public getAllTemplates(): PackagingTemplate[] {
    return Array.from(this.templates.values())
  }

  public getCategories(): PackagingCategory[] {
    return Array.from(this.templatesByCategory.keys())
  }

  public getTemplatesWithCategory(): { category: PackagingCategory; templates: PackagingTemplate[] }[] {
    return Array.from(this.templatesByCategory.entries()).map(([category, templates]) => ({
      category,
      templates
    }))
  }
}

// Export singleton instance
export const templateRegistry = new TemplateRegistry()

// Helper functions
export const getTemplateById = (id: string): PackagingTemplate | undefined => {
  return templateRegistry.getTemplate(id)
}

export const getTemplatesByCategory = (category: PackagingCategory): PackagingTemplate[] => {
  return templateRegistry.getTemplatesByCategory(category)
}

export const getAllTemplates = (): PackagingTemplate[] => {
  return templateRegistry.getAllTemplates()
}

export const getCategories = (): PackagingCategory[] => {
  return templateRegistry.getCategories()
}