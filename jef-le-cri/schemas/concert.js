// schemas/concert.js

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
    }
  ],
  
  // Pour afficher la date dans la liste Sanity
  preview: {
    select: {
      title: 'venue',
      subtitle: 'date',
      media: 'image'
    },
    prepare({ title, subtitle, media }) {
      const date = new Date(subtitle).toLocaleDateString('fr-FR');
      return {
        title: title,
        subtitle: date,
        media: media
      };
    }
  },
  
  // Tri par défaut : du plus proche au plus lointain
  orderings: [
    {
      title: 'Date (prochains)',
      name: 'dateAsc',
      by: [
        { field: 'date', direction: 'asc' }
      ]
    },
    {
      title: 'Date (passés)',
      name: 'dateDesc',
      by: [
        { field: 'date', direction: 'desc' }
      ]
    }
  ]
}