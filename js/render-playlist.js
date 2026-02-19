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
    
    // Regénère la playlist HTML
    const container = document.getElementById('playlist-container');
    container.innerHTML = '';
    
    songs.forEach((song, index) => {
      const div = document.createElement('div');
      div.className = 'playlist-item amplitude-song-container';
      div.setAttribute('amplitude-song-index', index);
      div.innerHTML = `
        <div class="playlist-number">${String(index + 1).padStart(2, '0')}</div>
        <div class="playlist-info">
          <div class="playlist-title">${song.name}</div>
          <div class="playlist-artist">${song.artist}</div>
        </div>
        <div class="playlist-duration">3:45</div>
      `;
      container.appendChild(div);
    });
    
    console.log(`${songs.length} morceau(x) chargé(s) depuis Sanity`);
  } catch (error) {
    console.error('Erreur playlist:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadPlaylistFromSanity);