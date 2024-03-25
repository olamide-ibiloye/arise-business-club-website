import {defineType, defineField, defineArrayMember} from 'sanity'

export const event = defineType({
  type: 'document',
  name: 'event',
  title: 'Events',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({type: 'image', name: 'image'}),
    defineField({
      type: 'array',
      name: 'description',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})
