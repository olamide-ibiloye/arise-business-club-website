import {defineType, defineField, defineArrayMember} from 'sanity'

export const about_us = defineType({
  type: 'object',
  name: 'about_us',
  title: 'About Us',
  fields: [
    defineField({type: 'string', name: 'header'}),
    defineField({
      type: 'array',
      name: 'body',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})
