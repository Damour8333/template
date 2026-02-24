// js/menu.js - Menu avec comportement au scroll

function initMenu() {
  const navbar = document.querySelector('.navbar');
  const floatingBtn = document.createElement('div');
  const menuOverlay = document.createElement('div');
  
  // Créer le bouton flottant noir
  floatingBtn.className = 'floating-menu-btn';
  floatingBtn.innerHTML = '<span></span><span></span><span></span>';
  floatingBtn.setAttribute('aria-label', 'Menu');
  document.body.appendChild(floatingBtn);
  
  // Créer l'overlay du menu noir avec tous les liens
  menuOverlay.className = 'menu-overlay';
  menuOverlay.innerHTML = `
    <nav class="overlay-menu">
      <a href="#musique" class="overlay-link">musique</a>
      <a href="#concerts" class="overlay-link">concerts à venir</a>
      <a href="concerts.html" class="overlay-link">tous les concerts</a>
      <a href="#bio" class="overlay-link">bio</a>
      <a href="#contact" class="overlay-link">contact</a>
    </nav>
  `;
  document.body.appendChild(menuOverlay);
  
  let lastScroll = 0;
  const scrollThreshold = 100;
  
  // Gestion du scroll
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Scroll vers le bas : cache navbar, affiche bouton noir
    if (currentScroll > scrollThreshold && currentScroll > lastScroll) {
      navbar.classList.add('is-hidden');
      floatingBtn.classList.add('is-visible');
    } 
    // Scroll vers le haut : affiche navbar, cache bouton noir
    else if (currentScroll < lastScroll || currentScroll < scrollThreshold) {
      navbar.classList.remove('is-hidden');
      floatingBtn.classList.remove('is-visible');
      closeOverlay();
    }
    
    lastScroll = currentScroll;
  });
  
  // Fermer l'overlay
  function closeOverlay() {
    floatingBtn.classList.remove('is-active');
    menuOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }
  
  // Ouvrir/fermer le menu noir au clic sur le bouton
  floatingBtn.addEventListener('click', () => {
    floatingBtn.classList.toggle('is-active');
    menuOverlay.classList.toggle('is-active');
    document.body.style.overflow = menuOverlay.classList.contains('is-active') ? 'hidden' : '';
  });
  
  // Fermer au clic sur un lien
  menuOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeOverlay();
    });
  });
  
  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('is-active')) {
      closeOverlay();
    }
  });
  
  // Reset quand on passe en desktop (>1023px)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
      const burger = document.querySelector('.navbar-burger');
      const menu = document.getElementById('navMenu');
      if (burger && menu) {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
      }
      closeOverlay();
    }
  });
  
  // Burger Bulma mobile (backup si JS bug)
  const burgers = document.querySelectorAll('.navbar-burger');
  burgers.forEach(el => {
    el.addEventListener('click', () => {
      const target = document.getElementById(el.dataset.target);
      el.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  });
}

document.addEventListener('DOMContentLoaded', initMenu);