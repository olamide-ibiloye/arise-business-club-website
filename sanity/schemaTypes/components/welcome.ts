import {defineType, defineField, defineArrayMember} from 'sanity'

export const welcome = defineType({
  type: 'object',
  name: 'welcome',
  title: 'Welcome',
  fields: [
    defineField({type: 'string', name: 'header'}),
    defineField({type: 'text', name: 'body'}),
  ],
})
