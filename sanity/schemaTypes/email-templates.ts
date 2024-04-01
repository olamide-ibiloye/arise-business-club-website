import {defineType, defineField, defineArrayMember} from 'sanity'

export const email_templates = defineType({
  type: 'document',
  name: 'email_templates',
  title: 'Email Templates',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({
      type: 'array',
      name: 'confirmation',
      title: 'Contact Confirmation Email',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      type: 'array',
      name: 'subscription',
      title: 'Newsletter Subscription Email',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      type: 'array',
      name: 'signup',
      title: 'Event Signup Email',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})
