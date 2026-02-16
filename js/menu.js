// js/menu.js - Menu avec comportement au scroll

function initMenu() {
  const navbar = document.querySelector('.navbar');
  const floatingBtn = document.createElement('div');
  const menuOverlay = document.createElement('div');
  
  // Créer le bouton flottant
  floatingBtn.className = 'floating-menu-btn';
  floatingBtn.innerHTML = '<span></span><span></span><span></span>';
  floatingBtn.setAttribute('aria-label', 'Menu');
  document.body.appendChild(floatingBtn);
  
  // Créer l'overlay du menu
  menuOverlay.className = 'menu-overlay';
  menuOverlay.innerHTML = `
    <nav class="overlay-menu">
      <a href="#musique" class="overlay-link">musique</a>
      <a href="#concerts" class="overlay-link">concerts</a>
      <a href="#bio" class="overlay-link">bio</a>
      <a href="#contact" class="overlay-link">contact</a>
    </nav>
  `;
  document.body.appendChild(menuOverlay);
  
  let lastScroll = 0;
  const scrollThreshold = 100; // Distance avant que le menu ne change
  
  // Gestion du scroll
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Si on scroll vers le bas et qu'on a dépassé le threshold
    if (currentScroll > scrollThreshold && currentScroll > lastScroll) {
      navbar.classList.add('is-hidden');
      floatingBtn.classList.add('is-visible');
    } 
    // Si on scroll vers le haut ou qu'on est en haut de page
    else if (currentScroll < lastScroll || currentScroll < scrollThreshold) {
      navbar.classList.remove('is-hidden');
      floatingBtn.classList.remove('is-visible');
      // Fermer l'overlay si ouvert
      closeOverlay();
    }
    
    lastScroll = currentScroll;
  });
  
  // Fonction pour fermer l'overlay
  function closeOverlay() {
    floatingBtn.classList.remove('is-active');
    menuOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }
  
  // Ouvrir/fermer le menu overlay
  floatingBtn.addEventListener('click', () => {
    floatingBtn.classList.toggle('is-active');
    menuOverlay.classList.toggle('is-active');
    
    if (menuOverlay.classList.contains('is-active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Fermer au clic sur un lien
  menuOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeOverlay();
    });
  });
  
  // Fermer avec la touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('is-active')) {
      closeOverlay();
    }
  });
  
  // Garder le burger Bulma fonctionnel sur mobile
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
}

// Démarrer quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initMenu);