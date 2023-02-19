import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Publication Title',
      type: 'string',
    }),
    defineField({
      name: 'conference',
      title: 'Conference',
      type: 'string',
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'string',
    }),
    defineField({
      name: 'citations',
      title: 'Citations',
      type: 'number',
      validation: (Rule) => Rule.min(0)
    }),
    defineField({
      name: 'publicationLink',
      title: 'Publication Link',
      type: 'url',
    }),
    defineField({
      name: 'datePublished',
      title: 'Date Published',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'text'
        }
      ]
    })
  ],
})
