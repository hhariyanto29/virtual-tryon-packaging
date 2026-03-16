// Re-export everything from the new template system
export * from './types'
export * from './registry'
export * from './defaults'

// Legacy exports for backward compatibility
export type { PackagingTemplate as Template } from './types'
export { defaultTemplates as templates } from './defaults'
export { getTemplateById, getTemplatesByCategory } from './registry'