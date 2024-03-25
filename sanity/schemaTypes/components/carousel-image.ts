import {defineType, defineField} from 'sanity'

export const carousel_image = defineType({
  type: 'object',
  name: 'carousel_image',
  title: 'Carousel Image',
  fields: [
    defineField({type: 'string', name: 'alt_text'}),
    defineField({type: 'image', name: 'image'}),
  ],
})
