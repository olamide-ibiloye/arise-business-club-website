import {defineType, defineField, defineArrayMember} from 'sanity'

export const news = defineType({
  type: 'object',
  name: 'news',
  title: 'News',
  fields: [
    defineField({type: 'string', name: 'header'}),
    defineField({type: 'string', name: 'subHeader'}),
    defineField({type: 'text', name: 'body'}),
  ],
})
