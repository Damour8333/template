<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jef le cri - Newsletter Test</title>
  <!-- Bulma CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  <!-- AmplitudeJS -->
  <script src="https://cdn.jsdelivr.net/npm/amplitudejs@5.3.2/dist/amplitude.min.js"></script>
  <!-- Votre CSS -->

  <link rel="stylesheet" href="css/nav.css">
  <link rel="stylesheet" href="css/hero.css">
  <link rel="stylesheet" href="css/content.css">
  <link rel="stylesheet" href="css/player.css">
  <link rel="stylesheet" href="css/date.css">
  <link rel="stylesheet" href="css/mobilefirst.css">
  <link rel="stylesheet" href="css/newsletters.css">
  <link rel="stylesheet" href="css/bio.css">
  
  <link rel="stylesheet" href="css/footer.css">

  

  <link rel="stylesheet" href="style.css">
  
  
  


</head>
<body>
  <!-- Header -->
  <header class="navbar is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a href="#" class="navbar-item logo">Jef le Cri</a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <a href="#musique" class="navbar-item">musique</a>
          <a href="#concerts" class="navbar-item">concerts</a>
          <a href="#bio" class="navbar-item">bio</a>
          <a href="#contact" class="navbar-item">contact</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1">Jef le cri</h1>
        <p class="subtitle is-4"> • chanteur révolté • </p>
        <div class="buttons is-centered mt-5">
          <a href="#musique" class="button is-light is-outlined is-rounded is-medium">écouter</a>
          <a href="#concerts" class="button is-light is-outlined is-rounded is-medium">concerts</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Bio -->
  <section id="bio" class="section content-section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-7 bio-text">
          <h2 class="title is-2">ça commence comme ça</h2>
          <p>Musicien basé à Bordeaux. 20 ans d'expérience scène & studio. Accompagnement technique et artistique pour groupes indépendants.</p>
          <p>Spécialiste mandoline, production rythmique, création de sites pour musiciens.</p>
        </div>
        <div class="column is-5 bio-photo">
          <figure class="image is-4by5">
            <img src="img/jef-3.jpg" alt="TON NOM" class="is-rounded has-shadow">
          </figure>
        </div>
      </div>
    </div>
  </section>

  <!-- MUSIQUE AVEC LECTEUR PRO -->
  <section id="musique" class="section content-section">
    <div class="container">
      <h2 class="title is-2 has-text-centered mb-6">Derniers projets</h2>
      
      <div class="columns is-centered">
        <div class="column is-8">
          <div id="amplitude-player" class="player-card">
            
            <div class="player-main">
              <div class="album-art">
                <img data-amplitude-song-info="cover_art_url"/>
              </div>
              <div class="song-info">
                <span class="song-name" data-amplitude-song-info="name"></span>
                <span class="song-artist" data-amplitude-song-info="artist"></span>
              </div>
            </div>

            <div class="player-controls">
              <div class="amplitude-prev" id="previous">
                <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
              </div>
              <div class="amplitude-play-pause" id="play-pause">
                <svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <svg class="pause-icon" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              </div>
              <div class="amplitude-next" id="next">
                <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
              </div>
            </div>

            <div class="progress-container">
              <input type="range" class="amplitude-song-slider" step=".1"/>
              <div class="time-container">
                <span class="current-time">
                  <span class="amplitude-current-minutes"></span>:<span class="amplitude-current-seconds"></span>
                </span>
                <span class="duration">
                  <span class="amplitude-duration-minutes"></span>:<span class="amplitude-duration-seconds"></span>
                </span>
              </div>
            </div>

            <div class="playlist">
              <div class="amplitude-playlist-container">
                <div class="amplitude-playlist" id="playlist-container"></div>
              </div>
            </div>

          </div>
        </div>git
      </div>
    </div>
  </section>

  <!-- Concerts -->
  <section id="concerts" class="section content-section">
    <div class="container">
      <h2 class="title is-2 has-text-centered mb-6">concerts</h2>
      
      <div class="card concert-item mb-5">
        <div class="card-content">
          <div class="columns is-vcentered">
            <div class="column is-8">
              <div class="concert-date title is-3 has-text-primary">7 mars 2026 .21h30</div>
              <h3 class="title is-4">Garage Moderne</h3>
              <p class="subtitle is-6 has-text-grey">Bordeaux guitare avec le cri du peuple</p>
              <a href="#" class="button is-outlined is-primary is-rounded">billetterie</a>
            </div>
            <div class="column is-4 concert-photo-wrapper">
              <img src="img/jef-5.jpg" alt="Le Rocher de Palmer" class="concert-img">
            </div>
          </div>
        </div>
      </div>

      <div class="card concert-item mb-5">
        <div class="card-content">
          <div class="columns is-vcentered">
            <div class="column is-8">
              <div class="concert-date title is-3 has-text-primary">28 mars 2026</div>
              <h3 class="title is-4">La Bus Paloma</h3>
              <p class="subtitle is-6 has-text-grey">Bordeaux • 20h30 • printemps décolonialiste</p>
              <a href="#" class="button is-outlined is-primary is-rounded">infos</a>
            </div>
            <div class="column is-4 concert-photo-wrapper">
              <img src="img/jef-3.jpg" alt="La Bus Paloma" class="concert-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- NEWSLETTER -->
 <!-- NEWSLETTER -->
<section class="section content-section newsletter">
  <div class="container has-text-centered">
    <h2 class="title is-2">nouvelles</h2>
    <p class="subtitle is-5 mb-5">Reçois mes actualités, dates de concert et nouveaux projets.</p>

       <!-- ⚠️ MESSAGES À PLACER ICI - AVANT LE FORMULAIRE ⚠️ -->
      
      <!-- Message d'erreur -->
      <div id="error-message" class="notification is-danger is-light" style="display: none;">
        ⚠️ Nous n'avons pas pu confirmer votre inscription.
      </div>
      
      <!-- Message de succès -->
      <div id="success-message" class="notification is-success is-light" style="display: none;">
        ✅ Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.
      </div>
    
    <!-- Formulaire Brevo stylisé avec Bulma -->
    <div id="sib-form-container" class="sib-form-container" style="max-width: 540px; margin: 0 auto;">
      
      <!-- Message d'erreur (caché par défaut) -->
      <div id="error-message" class="notification is-danger is-light" style="display: none;">
        ⚠️ Nous n'avons pas pu confirmer votre inscription.
      </div>
      
      <!-- Message de succès (caché par défaut) -->
      <div id="success-message" class="notification is-success is-light" style="display: none;">
        ✅ Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.
      </div>
      
      <!-- Formulaire stylisé -->
      <form id="sib-form" method="POST" action="https://99b18cc2.sibforms.com/serve/MUIFANx-I7JnVuE4Fc_BVbvYKDQ-21rkxvaacMSMGqRg-iVMM0bVK-2q5sLpqEAjrfNmZjyw2LhPu9iQe26d8rlF68_ml3Gcr2vjQE1FV_HrvTqT_TAPuFM0kATRNgm8eF94Bpk0QrQSbBW6nibmO9UbLgsmwuoJVkWIvQCbrXW5LnxO6S-NbMy-0k8MuSnd0gY5nJ714kQLrfIv4w==" data-type="subscription">
        
        <!-- Champ email avec style Bulma -->
        <div class="field">
          <label class="label has-text-left" style="color: #3C4858; font-weight: 700;">
            Veuillez renseigner votre adresse email pour vous inscrire <span class="has-text-danger">*</span>
          </label>
          <div class="control">
            <input 
              class="input is-medium" 
              type="email" 
              id="EMAIL" 
              name="EMAIL" 
              placeholder="ton@email.com" 
              required
              style="background-color: rgba(255,255,255,0.9);"
            >
          </div>
          <p class="help has-text-left" style="color: #8390A4;">
            Ex. : abc@xyz.com
          </p>
        </div>

        <!-- Case à cocher RGPD avec style Bulma -->
        <div class="field">
          <div class="control">
            <label class="checkbox" style="font-size: 14px; text-align: left; display: block;">
              <input type="checkbox" id="OPT_IN" name="OPT_IN" value="1" required>
              <span class="ml-2">J'accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre politique de confidentialité et mentions légales.</span>
              <span class="has-text-danger">*</span>
            </label>
          </div>
          <p class="help has-text-left" style="color: #8390A4; margin-top: 5px;">
            Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans nos emails.
          </p>
        </div>

        <!-- Bouton d'envoi stylisé -->
        <div class="field is-grouped is-grouped-centered mt-5">
          <div class="control">
            <button 
              type="submit" 
              class="button is-dark is-medium" 
              style="min-width: 200px; background-color: #3E4857;"
              id="submit-button"
            >
              <span class="icon is-small mr-2" id="submit-icon" style="display: none;">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                  <path d="M12 2v4M12 22v-4M4 12H2h2M22 12h-2 2M19.07 4.93l-2.83 2.83M6.9 17.1l-2.83 2.83M17.1 6.9l2.83-2.83M4.93 19.07l2.83-2.83" stroke="white" stroke-width="2" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                  </path>
                </svg>
              </span>
              <span id="submit-text">S'INSCRIRE</span>
            </button>
          </div>
        </div>

        <!-- Champs cachés requis par Brevo -->
        <input type="text" name="email_address_check" value="" class="input--hidden" style="display: none;">
        <input type="hidden" name="locale" value="fr">
      </form>
    </div>
  </div>
</section>

  <!-- Footer -->
  <footer class="footer content-section">
    <div class="container has-text-centered">
      <p class="mb-3">jef le cri &copy; 2026</p>
    
      <div class="social-icons is-flex is-justify-content-center is-gap-3">
        <a href="https://www.instagram.com/jef_le_cri/" class="social-link" aria-label="Instagram" target="_blank">
          <svg class="social-logo" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://soundcloud.com/semaflore" class="social-link" aria-label="SoundCloud" target="_blank">
          <svg class="social-logo" viewBox="0 0 24 24"><path d="M17.243 12.353c-.54-.73-1.39-1.255-2.38-1.255-.99 0-1.84.525-2.38 1.255l-8.302-4.666c-.2-.113-.423-.18-.653-.18-.905 0-1.637.732-1.637 1.637v9.448c0 .905.732 1.637 1.637 1.637.23 0 .452-.067.653-.18l8.302-4.666c.54.73 1.39 1.255 2.38 1.255.99 0 1.84-.525 2.38-1.255l2.998 1.685c.2.113.423.18.653.18.905 0 1.637-.732 1.637-1.637v-9.448c0-.905-.732-1.637-1.637-1.637-.23 0-.452.067-.653.18l-2.998 1.685z"/></svg>
        </a>
        <a href="lecrie@gmail.com" class="social-link" aria-label="Email">
          <svg class="social-logo" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
      </div>
    </div>
  </footer>

  <!-- Scripts JS séparés -->
  <script src="js/player.js"></script>
  <script src="js/newsletter-brevo.js"></script>
  <script src="js/menu.js"></script>
</body>
</html>

/* ========== BIO ========== */
.bio-text p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.bio-photo img {
  box-shadow: 0 8px 32px rgba(241, 233, 233, 0.1);
}


/* ========== SECTIONS CONTENT ========== */
.content-section {
  background: rgba(244, 238, 238, 0.099); /* ← FOND SECTIONS : blanc très transparent */
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  margin: 40px auto;
  max-width: 1000px;
}

.section {
  padding: 60px 20px;
}


/* ========== CONCERTS ========== */
.concert-item {
  background: rgba(255,255,255,0.6) !important; /* ← FOND CARTE CONCERT : blanc transparent */
  border-radius: 20px;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.concert-item:hover {
  background: rgba(255,255,255,0.8) !important; /* ← SURVOL CARTE : blanc plus opaque */
  transform: translateX(12px);
}

.concert-date {
  color: #1b1b1d !important; /* ← COULEUR DATE CONCERT : bleu (était gris clair #cbd1d9) */
  margin-bottom: 12px;
}

.concert-photo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.concert-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

/* ========== FOOTER ========== */
.footer {
  background: rgba(255, 255, 255, 0.099) !important; /* ← FOND FOOTER : blanc très transparent */
  margin-top: 40px;
  margin-bottom: 0 !important;
  padding: 40px 20px;
}

.contacts p {
  color: #0d0101; /* ← COULEUR CONTACTS : noir */
  margin: 8px 0;
}

/* ========== SOCIAL ICONS ========== */
.social-icons {
  gap: 24px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #000000; /* ← COULEUR ICÔNES SOCIAUX : bleu */
  transition: all 0.2s;
}

.social-logo {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.social-link:hover {
  color: #1a1a1a; /* ← COULEUR SURVOL ICÔNES : noir */
  transform: scale(1.1);
}

/* ========== HERO ========== */
.hero {
  background: transparent !important;
  padding-top: 80px;
}

.hero .title {
  font-size: 64px;
  font-weight: 300;
  color: #f4ebeb; /* ← COULEUR TITRE PRINCIPAL : noir */
}

.hero .subtitle {
  color: #e9d6d6; /* ← COULEUR SOUS-TITRE : rose/beige clair */
  font-style: italic;
}


/* ========== RESPONSIVE ========== */
@media (max-width: 768px) {
  .hero .title {
    font-size: 48px;
  }
  
  .player-card {
    padding: 25px;
  }
  
  .album-art img {
    width: 180px;
    height: 180px;
  }
  
  .concert-item:hover {
    transform: none;
  }
  
  .columns.is-vcentered {
    display: flex;
    flex-direction: column-reverse;
  }
  
  .concert-photo-wrapper {
    width: 100%;
    margin-bottom: 20px;
  }
  
  .concert-img {
    height: 220px;
    max-width: 300px;
  }
  
  .bio-text {
    text-align: center;
  }
}
/* ========== HEADER ========== */
.navbar {
  background: rgba(243, 235, 235, 0) !important; /* ← FOND HEADER : gris translucide */
  backdrop-filter: blur(10px);
}

.navbar-item {
  color: #383a3c !important; /* ← COULEUR LIENS MENU : gris clair */
}

.navbar-item.logo {
  color: #f1e9e9c1 !important; /* ← COULEUR LOGO : blanc cassé */
  font-size: 24px;
  font-weight: bold;
}

.navbar-burger span {
  background-color: #76797e; /* ← COULEUR ICÔNE MENU BURGER : gris clair */
}

/* Menu principal - transition fluide */
.navbar {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
              background-color 0.3s ease,
              box-shadow 0.3s ease;
}

/* État caché du menu principal */
.navbar.is-hidden {
  transform: translateY(-100%);
}

/* Menu burger flottant */
.floating-menu-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px) scale(0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.1);
}

/* Apparition du bouton flottant */
.floating-menu-btn.is-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

/* Hover du bouton flottant */
.floating-menu-btn:hover {
  transform: scale(1.1);
  background: rgba(0, 0, 0, 1);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
}

/* Lignes du burger flottant */
.floating-menu-btn span {
  display: block;
  width: 20px;
  height: 2px;
  background: white;
  margin: 2px 0;
  transition: all 0.3s ease;
  border-radius: 1px;
}

/* Animation burger -> croix */
.floating-menu-btn.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.floating-menu-btn.is-active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.floating-menu-btn.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

/* Menu overlay plein écran */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-overlay.is-active {
  opacity: 1;
  visibility: visible;
}

/* Liens du menu overlay */
.menu-overlay .overlay-menu {
  text-align: center;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.4s ease 0.1s;
}

.menu-overlay.is-active .overlay-menu {
  transform: translateY(0);
  opacity: 1;
}

.menu-overlay .overlay-menu a {
  display: block;
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: lowercase;
  padding: 15px 0;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  position: relative;
}

.menu-overlay .overlay-menu a::after {
  content: '';
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #ff3860;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.menu-overlay .overlay-menu a:hover {
  color: #ff3860;
  transform: scale(1.05);
}

.menu-overlay .overlay-menu a:hover::after {
  width: 60%;
}

/* Responsive : sur mobile, le menu principal est toujours caché après scroll */
@media screen and (max-width: 1023px) {
  .navbar-menu.is-active {
    position: fixed;
    top: 52px;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
  }


}


/* ========== LECTEUR AMPLITUDEJS ========== */
.player-card {
  background: rgba(0, 0, 0, 0); /* ← FOND LECTEUR : NOIR TRANSPARENT (était rgba(140, 136, 136, 0)) */
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  color: white;
  box-shadow: 0 25px 80px rgba(0,0,0,0.6);
}

/* Partie principale : pochette + infos */
.player-main {
  text-align: center;
  margin-bottom: 30px;
}

.album-art {
  margin-bottom: 25px;
}

.album-art img {
  width: 220px;
  height: 220px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4); /* ← OMBRE POCHETTE : noire (était blanche) */
  transition: transform 0.3s;
}

.album-art img:hover {
  transform: scale(1.02);
}

.song-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.song-name {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff; /* ← COULEUR NOM CHANSON : blanc pur (était #f3ebeb) */
}

.song-artist {
  font-size: 16px;
  color: #aaaaaa; /* ← COULEUR ARTISTE : gris clair (était #f4eeee) */
}

/* Contrôles */
.player-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 25px;
}

.amplitude-prev, .amplitude-next {
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.amplitude-prev:hover, .amplitude-next:hover {
  opacity: 1;
  transform: scale(1.1);
}

.amplitude-prev svg, .amplitude-next svg {
  width: 30px;
  height: 30px;
  fill: #ffffff; /* ← COULEUR FLÈCHES : blanc */
}

.amplitude-play-pause {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e4a8c 0%, #2d5aa0 100%); /* ← COULEUR BOUTON PLAY : bleu dégradé (était gris #738196) */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 8px 25px rgba(30, 74, 140, 0.4);
}

.amplitude-play-pause:hover {
  transform: scale(1.08);
  box-shadow: 0 12px 35px rgba(30, 74, 140, 0.5);
}

.amplitude-play-pause svg {
  width: 30px;
  height: 30px;
  fill: #ffffff; /* ← COULEUR ICÔNE PLAY : blanc */
}

/* Gestion play/pause */
.amplitude-play-pause .pause-icon {
  display: none;
}

.amplitude-play-pause.amplitude-playing .play-icon {
  display: none;
}

.amplitude-play-pause.amplitude-playing .pause-icon {
  display: block;
}

/* Barre de progression */
.progress-container {
  margin-bottom: 30px;
}

.amplitude-song-slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2); /* ← COULEUR FOND BARRE : blanc transparent (était rose) */
  outline: none;
  -webkit-appearance: none;
  margin-bottom: 12px;
}

.amplitude-song-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #1e4a8c; /* ← COULEUR CURSEUR : bleu */
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s;
}

.amplitude-song-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.amplitude-song-slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #1e4a8c; /* ← COULEUR CURSEUR FIREFOX : bleu */
  cursor: pointer;
  border: none;
}

.time-container {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #888888; /* ← COULEUR TEMPS : gris (était blanc #f6eded) */
  font-family: 'Courier New', monospace;
}

/* Playlist */
.playlist {
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* ← BORDURE PLAYLIST : blanc très transparent (était rose) */
  padding-top: 20px;
}

.playlist-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 8px;
}

.playlist-item:hover {
  background: rgba(255, 255, 255, 0.05); /* ← SURVOL PLAYLIST : blanc très transparent (était transparent) */
}

.playlist-item.amplitude-active-song-container {
  background: rgba(30, 74, 140, 0.2); /* ← FOND CHANSON ACTIVE : bleu transparent */
  border-left: 3px solid #1e4a8c; /* ← BORDURE CHANSON ACTIVE : bleu */
}

.playlist-number {
  width: 30px;
  color: #888888; /* ← COULEUR NUMÉRO : gris (était gris clair #d8d0d0) */
  font-size: 14px;
}

.playlist-info {
  flex: 1;
}

.playlist-title {
  color: #ffffff; /* ← COULEUR TITRE PLAYLIST : blanc */
  font-size: 15px;
  margin-bottom: 3px;
}

.playlist-artist {
  color: #aaaaaa; /* ← COULEUR ARTISTE PLAYLIST : gris clair (était blanc #eae6e6) */
  font-size: 12px;
}

.playlist-duration {
  color: #666666; /* ← COULEUR DURÉE : gris moyen */
  font-size: 13px;
}

* ========== POLICE GEORGIA ========== */
body, .title, .subtitle, .button, .input {
  font-family: Georgia, 'Times New Roman', serif !important;
}

/* ========== FOND & BASE ========== */
body {
  background-image: url('img/jef-1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #0b0800; /* ← COULEUR SECOURS si image ne charge pas */
  color: #090000bc;
}


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

// js/newsletter-brevo.js - Formulaire newsletter Brevo avec UX améliorée

// Validation email
function validateEmail(email) {
  if (!email) return false;
  if (/[<>\"'&]/.test(email)) return false;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regexEmail.test(email);
}

// Afficher message de confirmation (affiche le div existant)
function showConfirmation() {
  const form = document.getElementById('sib-form');
  const successDiv = document.getElementById('success-message');
  const emailInput = document.getElementById('EMAIL');
  
  // 1. Cacher le formulaire (l'email disparaît)
  form.style.display = 'none';
  
  // 2. Vider l'email (sécurité)
  emailInput.value = '';
  
  // 3. Afficher le message de succès existant dans le HTML
  successDiv.style.display = 'block';
  
  // 4. Après 3 secondes, réafficher le formulaire propre
  setTimeout(() => {
    successDiv.style.display = 'none';
    form.style.display = 'block';
    // La case à cocher est décochée
    document.getElementById('OPT_IN').checked = false;
  }, 3000);
}

// Afficher message d'erreur (affiche le div existant)
function showError(message) {
  const errorDiv = document.getElementById('error-message');
  const errorText = errorDiv.querySelector('.notification');
  
  // On garde le même style mais on change le texte si besoin
  errorText.textContent = '⚠️ ' + message;
  errorDiv.style.display = 'block';
  
  setTimeout(() => {
    errorDiv.style.display = 'none';
  }, 3000);
}

// Gestionnaire de soumission
async function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const email = document.getElementById('EMAIL').value.trim();
  const optIn = document.getElementById('OPT_IN').checked;
  const submitButton = document.getElementById('submit-button');
  const submitText = document.getElementById('submit-text');
  const submitIcon = document.getElementById('submit-icon');
  
  // Validation côté client
  if (!validateEmail(email)) {
    showError('Veuillez entrer une adresse email valide.');
    return;
  }
  
  if (!optIn) {
    showError('Vous devez accepter les conditions pour vous inscrire.');
    return;
  }
  
  // Désactiver le bouton pendant l'envoi
  submitButton.disabled = true;
  submitText.textContent = 'Inscription...';
  submitIcon.style.display = 'inline-block';
  
  try {
    // Récupérer les données du formulaire
    const formData = new FormData(form);
    
    // Envoyer à Brevo
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Important pour Brevo
    });
    
    // 🎉 SUCCÈS ! L'email "part" et le message apparaît
    showConfirmation();
    
  } catch (error) {
    console.error('Erreur:', error);
    showError('Une erreur est survenue. Veuillez réessayer plus tard.');
    
    // Réactiver le bouton en cas d'erreur seulement
    submitButton.disabled = false;
    submitText.textContent = "S'INSCRIRE";
    submitIcon.style.display = 'none';
  }
}

// Ajouter un peu de style CSS supplémentaire
function addCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Style pour la case à cocher personnalisée */
    .checkbox {
      display: flex !important;
      align-items: flex-start !important;
      text-align: left !important;
      line-height: 1.4 !important;
    }
    
    .checkbox input[type="checkbox"] {
      margin-top: 3px;
      flex-shrink: 0;
    }
    
    .checkbox span {
      display: inline-block;
      margin-left: 8px;
    }
    
    /* Animation pour le bouton */
    #submit-button {
      transition: all 0.3s ease;
    }
    
    #submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(62,72,87,0.3);
    }
    
    #submit-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    /* Style pour les messages */
    .notification {
      border-radius: 8px;
      margin-bottom: 20px;
      animation: slideDown 0.3s ease;
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Animation de disparition du formulaire */
    #sib-form {
      transition: opacity 0.3s ease;
    }
    
    #sib-form[style*="display: none"] {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
}

// Initialiser le formulaire
function initNewsletter() {
  // Ajouter les styles personnalisés
  addCustomStyles();
  
  // Récupérer les éléments
  const form = document.getElementById('sib-form');
  const successDiv = document.getElementById('success-message');
  const errorDiv = document.getElementById('error-message');
  
  // Cacher les messages au départ
  successDiv.style.display = 'none';
  errorDiv.style.display = 'none';
  
  // Ajouter l'écouteur d'événement
  form.addEventListener('submit', handleSubmit);
}

// Démarrer quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initNewsletter);


// js/player.js - Lecteur AmplitudeJS

// Configuration des chansons
const songs = [
  {
    name: "Notre amitié",
    artist: "Jef le Cri",
    url: "music/song-1.mp3",
    cover_art_url: "img/jef-2.jpg"
  },
  {
    name: "petit chat",
    artist: "Benoit Lescouzeres",
    url: "music/song-2.mp3",
    cover_art_url: "img/jef-2.jpg"
  },
  {
    name: "les pyrénées",
    artist: "Jef le Cri",
    url: "music/song-3.mp3",
    cover_art_url: "img/jef-3.jpg"
  }
];

// Générer la playlist HTML
function generatePlaylist() {
  const container = document.getElementById('playlist-container');
  let html = '';
  
  songs.forEach((song, index) => {
    html += `
      <div class="playlist-item amplitude-song-container" amplitude-song-index="${index}">
        <div class="playlist-number">${String(index + 1).padStart(2, '0')}</div>
        <div class="playlist-info">
          <div class="playlist-title">${song.name}</div>
          <div class="playlist-artist">${song.artist}</div>
        </div>
        <div class="playlist-duration">3:45</div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// Initialiser le lecteur
function initPlayer() {
  generatePlaylist();
  
  Amplitude.init({
    songs: songs,
    callbacks: {
      play: function() {
        document.getElementById('play-pause').classList.add('amplitude-playing');
      },
      pause: function() {
        document.getElementById('play-pause').classList.remove('amplitude-playing');
      }
    }
  });
}

// Démarrer quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initPlayer);