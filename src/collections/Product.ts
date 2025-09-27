import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'product-categories',
      hasMany: true,
      index: true
    }
  ],
  upload: true,
}
export const ProductCategories: CollectionConfig = {
  slug: 'product-categories',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'relatedProducts',
      type: 'join',
      collection: 'products',
      on: 'categories'
    },
  ],
  upload: true,
}
