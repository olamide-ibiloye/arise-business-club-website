import {defineType, defineField, defineArrayMember} from 'sanity'

export const homepage = defineType({
  type: 'document',
  name: 'homepage',
  title: 'Home Page Content',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'text', name: 'description'}),
    defineField({type: 'number', name: 'price'}),
  ],
})
