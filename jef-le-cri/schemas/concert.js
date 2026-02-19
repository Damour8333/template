export default {
  name: 'concert',
  type: 'document',
  title: 'Concerts',
  fields: [
    {
      name: 'date',
      type: 'datetime',
      title: 'Date et heure',
      validation: Rule => Rule.required()
    },
    {
      name: 'venue',
      type: 'string',
      title: 'Lieu (salle)',
      validation: Rule => Rule.required()
    },
    {
      name: 'city',
      type: 'string',
      title: 'Ville',
      initialValue: 'Bordeaux'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 2
    },
    {
      name: 'ticketUrl',
      type: 'url',
      title: 'Lien billetterie'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Photo'
    },
    {
      name: 'isPast',
      type: 'boolean',
      title: 'Concert passé ?',
      initialValue: false
    }
  ]
}