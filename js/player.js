// js/player.js - Lecteur AmplitudeJS unifié

// Chansons par défaut (fallback)
const defaultSongs = [
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

// Génère la playlist HTML et ajoute les clics
function generatePlaylistHTML(songs) {
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
  
  // 🔥 AJOUTE LES CLICS ICI - après avoir créé le HTML
  document.querySelectorAll('.playlist-item').forEach((item, index) => {
    item.addEventListener('click', function () {
      Amplitude.playSongAtIndex(index);
    });
  });
}

// Initialise avec les chansons par défaut
function initPlayer() {
  generatePlaylistHTML(defaultSongs);
  
  Amplitude.init({
    songs: defaultSongs,
    callbacks: {
      play: function() {
        document.getElementById('play-pause').classList.add('amplitude-playing');
      },
      pause: function() {
        document.getElementById('play-pause').classList.remove('amplitude-playing');
      }
    }
  });
  
  // Puis essaie de charger depuis Sanity
  loadPlaylistFromSanity();
}

// Charge depuis Sanity (async)
async function loadPlaylistFromSanity() {
  const query = `*[_type == "track"] | order(order asc) {
    title,
    artist,
    "audioUrl": audioFile.asset->url,
    "coverUrl": coverImage.asset->url
  }`;
  
  try {
    const response = await fetch(`https://m27cjm4v.api.sanity.io/v2023-05-03/data/query/production?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    const tracks = data.result || [];
    
    if (tracks.length === 0) {
      console.log('Pas de morceaux dans Sanity, on garde la playlist par défaut');
      return;
    }
    
    // Transforme pour AmplitudeJS
    const songs = tracks.map(track => ({
      name: track.title,
      artist: track.artist || 'Jef le Cri',
      url: track.audioUrl,
      cover_art_url: track.coverUrl || 'img/jef-2.jpg'
    }));
    
    // Réinitialise Amplitude avec les nouvelles chansons
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
    
    // Regénère la playlist avec les clics
    generatePlaylistHTML(songs);
    
    console.log(`${songs.length} morceau(x) chargé(s) depuis Sanity`);
  } catch (error) {
    console.error('Erreur playlist Sanity:', error);
    // Garde les chansons par défaut en cas d'erreur
  }
}

// Démarrer quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initPlayer);