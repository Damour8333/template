// js/sanity-client.js - Connexion à Sanity

const PROJECT_ID = 'm27cjm4v';
const DATASET = 'production';
const API_VERSION = '2023-05-03';

// URL de l'API Sanity (CDN pour la production)
const SANITY_URL = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`;

// Fonction pour construire les URLs d'images Sanity
function getSanityImageUrl(source, width = 800) {
  if (!source?.asset?._ref) return '';
  
  const ref = source.asset._ref;
  const [_, id, dimensions, format] = ref.split('-');
  return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}-${dimensions}.${format}?w=${width}&auto=format`;
}

// Requête fetch avec GROQ (langage de requête Sanity)
async function fetchSanity(query) {
  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `${SANITY_URL}?query=${encodedQuery}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data.result || [];
  } catch (error) {
    console.error('Erreur Sanity:', error);
    return [];
  }
}

// Récupère les concerts à venir
async function getUpcomingConcerts() {
  const query = `*[_type == "concert" && isPast != true] | order(date asc) {
    _id,
    date,
    venue,
    city,
    description,
    ticketUrl,
    image
  }`;
  
  return await fetchSanity(query);
}

// Formate la date pour l'affichage
function formatConcertDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('fr-FR', options).replace(':', 'h');
}

// Export pour les autres scripts
window.SanityClient = {
  getUpcomingConcerts,
  getSanityImageUrl,
  formatConcertDate
};