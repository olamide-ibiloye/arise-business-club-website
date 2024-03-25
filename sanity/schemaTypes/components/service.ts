import {defineType, defineField} from 'sanity'

export const service = defineType({
  type: 'object',
  name: 'service',
  title: 'Service',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({
      type: 'slug',
      name: 'id',
      options: {source: (doc, {parent}: {parent: any}) => parent.title, maxLength: 96},
    }),
    defineField({type: 'icon', name: 'icon'}),
    defineField({type: 'text', name: 'body'}),
  ],
})
