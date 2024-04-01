import {defineType, defineField} from 'sanity'

export const eventspage = defineType({
  type: 'document',
  name: 'eventspage',
  title: 'Events Page',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'image', name: 'banner'}),
  ],
})
