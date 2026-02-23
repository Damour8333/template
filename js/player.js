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

  // 🔥 Ajout du comportement clic manuel
  document.querySelectorAll('.playlist-item').forEach((item, index) => {
    item.addEventListener('click', function () {
      Amplitude.playSongAtIndex(index);
    });
  });
}

// Démarrer quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initPlayer);