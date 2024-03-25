import {defineType, defineField, defineArrayMember} from 'sanity'

export const homepage = defineType({
  type: 'document',
  name: 'homepage',
  title: 'Home Page',
  fields: [
    defineField({type: 'string', name: 'title'}),
    defineField({type: 'carousel', name: 'carousel'}),
    defineField({type: 'welcome', name: 'welcome'}),
    defineField({type: 'about_us', name: 'about_us'}),
    defineField({type: 'our_services', name: 'our_services'}),
    defineField({type: 'news', name: 'news'}),
    defineField({type: 'contact_us', name: 'contact_us'}),
    defineField({type: 'join_now', name: 'join_now'}),
  ],
})
