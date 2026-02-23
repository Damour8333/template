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
      
      // 🔥 AJOUTE LE CLIC ICI
      div.addEventListener('click', function () {
        Amplitude.playSongAtIndex(index);
      });
      
      container.appendChild(div);
    });