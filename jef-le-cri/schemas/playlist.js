export default {
  name: 'track',
  type: 'document',
  title: 'Morceaux',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
      validation: Rule => Rule.required()
    },
    {
      name: 'artist',
      type: 'string',
      title: 'Artiste',
      initialValue: 'Jef le Cri'
    },
    {
      name: 'audioFile',
      type: 'file',
      title: 'Fichier audio',
      options: { accept: 'audio/*' }
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Pochette'
    },
    {
      name: 'order',
      type: 'number',
      title: 'Ordre de lecture',
      initialValue: 0
    }
  ],
  orderings: [
    {title: 'Ordre', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}
  ]
}