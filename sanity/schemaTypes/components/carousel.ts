import {defineType, defineField, defineArrayMember} from 'sanity'

export const carousel = defineType({
  type: 'object',
  name: 'carousel',
  title: 'Carousel Images',
  fields: [
    defineField({
      type: 'array',
      name: 'images',
      title: 'Carousel Images',
      of: [defineArrayMember({type: 'carousel_image'})],
    }),
  ],
})
