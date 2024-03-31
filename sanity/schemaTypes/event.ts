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
    defineField({type: 'image', name: 'image', title: 'Event Image'}),
    defineField({type: 'string', name: 'altText', title: 'Image Description'}),
    defineField({
      type: 'array',
      name: 'description',
      title: 'Event Description',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({type: 'datetime', name: 'datetime', title: 'Event Date'}),
  ],
})
