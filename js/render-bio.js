async function renderBio() {
  const query = `*[_type == "bio"][0] {
    title,
    paragraphs,
    photo
  }`;
  
  try {
    const response = await fetch(`https://m27cjm4v.api.sanity.io/v2023-05-03/data/query/production?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    const bio = data.result;
    
    if (!bio) return;
    
    // Titre
    const titleEl = document.querySelector('#bio .title.is-2');
    if (titleEl && bio.title) titleEl.textContent = bio.title;
    
    // Paragraphes
    const textContainer = document.querySelector('.bio-text');
    if (textContainer && bio.paragraphs) {
      const existingTitle = textContainer.querySelector('h2');
      textContainer.innerHTML = '';
      textContainer.appendChild(existingTitle);
      
      bio.paragraphs.forEach(para => {
        const p = document.createElement('p');
        p.textContent = para;
        textContainer.appendChild(p);
      });
    }
    
    // Photo
    if (bio.photo) {
      const imgEl = document.querySelector('.bio-photo img');
      if (imgEl) {
        const ref = bio.photo.asset._ref;
        const [_, id, dimensions, format] = ref.split('-');
        imgEl.src = `https://cdn.sanity.io/images/m27cjm4v/production/${id}-${dimensions}.${format}?w=600`;
      }
    }
    
    console.log('Bio chargée depuis Sanity');
  } catch (error) {
    console.error('Erreur bio:', error);
  }
}

document.addEventListener('DOMContentLoaded', renderBio);