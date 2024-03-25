import {defineType, defineField, defineArrayMember} from 'sanity'

export const icon = defineType({
  title: 'Icon',
  name: 'icon',
  type: 'string',
  initialValue: 'Financial Education',
  options: {
    list: [
      {title: 'Financial Education', value: 'Financial Education'},
      {title: 'Networking Events', value: 'Networking Events'},
      {title: 'Investment Opportunities', value: 'Investment Opportunities'},
      {title: 'Email', value: 'Email'},
      {title: 'Phone', value: 'Phone'},
      {title: 'LinkedIn', value: 'LinkedIn'},
      {title: 'Instagram', value: 'Instagram'},
      {title: 'Facebook', value: 'Facebook'},
    ],
  },
})
