// js/render-concerts.js - Affiche les concerts depuis Sanity

async function renderConcerts() {
  const container = document.querySelector('#concerts .container');
  if (!container) {
    console.error('Section #concerts .container non trouvée');
    return;
  }

  try {
    const concerts = await window.SanityClient.getUpcomingConcerts();
    console.log('Concerts reçus:', concerts);
    
    // Sauvegarde le titre
    const titleElement = container.querySelector('h2');
    const titleHTML = titleElement ? titleElement.outerHTML : '<h2 class="title is-2 has-text-centered mb-6">concerts</h2>';
    
    // Si pas de concerts, garde le HTML statique
    if (!concerts || concerts.length === 0) {
      console.log('Pas de concerts trouvés dans Sanity');
      return;
    }
    
    // Reconstruit le contenu
    container.innerHTML = titleHTML;
    
    // Génère les cartes de concert
    concerts.forEach(concert => {
      const imageUrl = concert.image 
        ? window.SanityClient.getSanityImageUrl(concert.image, 400)
        : 'img/jef-3.jpg';
      
      const dateFormatted = window.SanityClient.formatConcertDate(concert.date);
      const buttonText = concert.ticketUrl ? 'billetterie' : 'infos';
      const buttonUrl = concert.ticketUrl || '#';
      
      const concertHTML = `
        <div class="card concert-item mb-5" data-concert-id="${concert._id}">
          <div class="card-content">
            <div class="columns is-vcentered">
              <div class="column is-8">
                <div class="concert-date title is-3 has-text-primary">${dateFormatted}</div>
                <h3 class="title is-4">${concert.venue || 'Lieu à confirmer'}</h3>
                <p class="subtitle is-6 has-text-grey">${concert.city || ''}${concert.description ? ' • ' + concert.description : ''}</p>
                <a href="${buttonUrl}" class="button is-outlined is-primary is-rounded" ${concert.ticketUrl ? 'target="_blank"' : ''}>${buttonText}</a>
              </div>
              <div class="column is-4 concert-photo-wrapper">
                <img src="${imageUrl}" alt="${concert.venue || 'Concert'}" class="concert-img">
              </div>
            </div>
          </div>
        </div>
      `;
      
      container.insertAdjacentHTML('beforeend', concertHTML);
    });
    
    console.log(`${concerts.length} concert(s) chargé(s) depuis Sanity`);
    
  } catch (error) {
    console.error('Erreur dans renderConcerts:', error);
  }
}

// Initialise le rendu quand le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderConcerts);
} else {
  // DOM déjà chargé
  renderConcerts();
}