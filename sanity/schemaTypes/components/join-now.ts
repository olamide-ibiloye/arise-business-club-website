import {defineType, defineField, defineArrayMember} from 'sanity'

export const join_now = defineType({
  type: 'object',
  name: 'join_now',
  title: 'Join Now',
  fields: [
    defineField({type: 'string', name: 'header'}),
    defineField({type: 'string', name: 'subHeader'}),
    defineField({type: 'text', name: 'body'}),
    defineField({type: 'string', name: 'buttonName'}),
  ],
})
