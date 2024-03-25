import {defineType, defineField, defineArrayMember} from 'sanity'

export const contact_us = defineType({
  type: 'object',
  name: 'contact_us',
  title: 'Contact Us',
  fields: [
    defineField({type: 'string', name: 'header'}),
    defineField({type: 'string', name: 'subHeader'}),
    defineField({type: 'text', name: 'body'}),
    defineField({
      type: 'array',
      name: 'contacts',
      title: 'Contacts',
      of: [defineArrayMember({type: 'contact'})],
    }),
  ],
})
