import {defineType, defineField} from 'sanity'

export const contact = defineType({
  type: 'object',
  name: 'contact',
  title: 'Contact',
  fields: [
    defineField({type: 'string', name: 'name'}),
    defineField({type: 'string', name: 'value'}),
    defineField({type: 'icon', name: 'icon'}),
  ],
})
