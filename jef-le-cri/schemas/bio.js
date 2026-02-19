export default {
  name: 'bio',
  type: 'document',
  title: 'Bio',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
      initialValue: 'ça commence comme ça'
    },
    {
      name: 'paragraphs',
      type: 'array',
      title: 'Paragraphes',
      of: [{ type: 'text', rows: 3 }],
      validation: Rule => Rule.min(1).max(3)
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo'
    }
  ]
}