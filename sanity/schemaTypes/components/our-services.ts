import {defineType, defineField, defineArrayMember} from 'sanity'

export const our_services = defineType({
  type: 'object',
  name: 'our_services',
  title: 'Our Services',
  fields: [
    defineField({type: 'string', name: 'header'}),
    defineField({type: 'string', name: 'subHeader'}),
    defineField({
      type: 'array',
      name: 'services',
      title: 'Services',
      of: [defineArrayMember({type: 'service'})],
    }),
  ],
})
