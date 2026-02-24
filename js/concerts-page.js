// js/concerts-page.js - Page concerts avec tri chronologique

async function renderAllConcerts() {
  const containerAVenir = document.getElementById('liste-a-venir');
  const containerPasses = document.getElementById('liste-passes');
  
  if (!containerAVenir || !containerPasses) {
    console.error('Conteneurs concerts non trouvés');
    return;
  }

  try {
    // Récupère tous les concerts (pas seulement "upcoming")
    const query = `*[_type == "concert"] | order(date asc) {
      _id,
      date,
      venue,
      city,
      description,
      ticketUrl,
      image
    }`;
    
    const response = await fetch(
      `https://m27cjm4v.api.sanity.io/v2023-05-03/data/query/production?query=${encodeURIComponent(query)}`
    );
    
    const data = await response.json();
    const concerts = data.result || [];
    
    console.log(`${concerts.length} concerts trouvés`);

    // Sépare à venir / passés
    const maintenant = new Date();
    const aVenir = concerts.filter(c => new Date(c.date) >= maintenant);
    const passes = concerts.filter(c => new Date(c.date) < maintenant);

    console.log(`${aVenir.length} à venir, ${passes.length} passés`);

    // Affiche les concerts à venir
    if (aVenir.length === 0) {
      containerAVenir.innerHTML = '<p class="no-concert">Aucun concert prévu pour le moment...</p>';
    } else {
      aVenir.forEach(concert => {
        containerAVenir.appendChild(createConcertRow(concert));
      });
    }

    // Affiche les concerts passés
    if (passes.length === 0) {
      containerPasses.innerHTML = '<p class="no-concert">Pas d\'historique pour l\'instant</p>';
    } else {
      // Inverse l'ordre pour avoir les plus récents d'abord
      passes.reverse().forEach(concert => {
        containerPasses.appendChild(createConcertRow(concert));
      });
    }

  } catch (error) {
    console.error('Erreur chargement concerts:', error);
    containerAVenir.innerHTML = '<p class="error">Impossible de charger les concerts</p>';
  }
}

// Crée une ligne de concert
function createConcertRow(concert) {
  const date = new Date(concert.date);
  const jour = date.getDate();
  const mois = date.toLocaleDateString('fr-FR', { month: 'short' });
  
  const imageUrl = concert.image 
    ? `https://cdn.sanity.io/images/m27cjm4v/production/${concert.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`
    : 'img/jef-3.jpg';

  const hasBilletterie = concert.ticketUrl && concert.ticketUrl.trim() !== '';
  const buttonText = hasBilletterie ? 'billetterie' : 'infos';
  const buttonUrl = hasBilletterie ? concert.ticketUrl : '#';

  const div = document.createElement('div');
  div.className = 'concert-row';
  div.innerHTML = `
    <div class="concert-date-badge">
      <span class="concert-day">${jour}</span>
      <span class="concert-month">${mois}</span>
    </div>
    <div class="concert-info">
      <div class="concert-venue">${concert.venue || 'Lieu à confirmer'}</div>
      <div class="concert-city">${concert.city || ''}${concert.description ? ' • ' + concert.description : ''}</div>
    </div>
    <a href="${buttonUrl}" class="concert-link" ${hasBilletterie ? 'target="_blank" rel="noopener"' : ''}>
      ${buttonText}
    </a>
  `;
  
  return div;
}

// Lance au chargement
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAllConcerts);
} else {
  renderAllConcerts();
}