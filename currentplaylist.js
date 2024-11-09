// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebarcontent = document.getElementById("barcontent");

    
    // Add an event listener for the button click
    toggleBtn.addEventListener('click', function() {
        // Check if the sidebar is collapsed
        if (sidebar.classList.contains('collapsed')) {
            // If collapsed, show the sidebar content and remove the 'collapsed' class
            sidebar.classList.remove('collapsed');
            sidebarcontent.style.display = 'block';  // Show the sidebar content
        } else {
            // If not collapsed, hide the sidebar content and add the 'collapsed' class
            sidebar.classList.add('collapsed');
            sidebarcontent.style.display = 'none';  // Hide the sidebar content
        }
    });
});

const playButton = document.getElementById("play");

    playButton.addEventListener("click", function() {
        if (playButton.textContent === "||") {
            // Change to '>|' (play)
            playButton.textContent = ">|";
        } else {
            // Change to '||' (pause)
            playButton.textContent = "||";
    }
});

document.getElementById("remove-song").addEventListener("click", function(event) {
    const songSearchInput = document.getElementById("search-remove");

    // Remove previous error message if it exists
    const existingError = document.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }

    // Validation for the song search input
    if (songSearchInput.value.trim() === "") {
        event.preventDefault(); // Prevent action if there's an error
        alert("You must choose a song to remove.");
    } 
});


// currentplaylist.js

document.getElementById('remove-song').addEventListener('click', function() {
    // Obtener el nombre de la canción ingresada en el campo de búsqueda
    const songName = document.getElementById('search-remove').value.trim().toLowerCase();

    // Verificar si se introdujo un nombre de canción
    if (songName === "") {
        alert("Por favor, ingresa el nombre de una canción.");
        return;
    }

    // Obtener la lista de canciones de la playlist
    const playlist = document.querySelectorAll(".Playlistlist li");

    // Bandera para verificar si la canción fue encontrada
    let songFound = false;

    // Iterar sobre la lista de canciones y buscar la que coincida con el nombre ingresado
    playlist.forEach(function(songItem) {
        if (songItem.textContent.toLowerCase() === songName) {
            // Si la canción coincide, la eliminamos
            songItem.remove();
            songFound = true;
        }
    });

    // Si no se encontró la canción, mostrar un mensaje
    if (!songFound) {
        alert("La canción no se encuentra en la lista.");
    }

    // Limpiar el campo de búsqueda
    document.getElementById('search-remove').value = "";
});

// Define the Song class
class Song {
    constructor(title, artist, genre) {
      this.title = title;
      this.artist = artist;
      this.genre = genre;
    }
  
    display() {
      return `${this.title} by ${this.artist} (${this.genre})`;
    }
  }
  
  // Define the Playlist class
  class Playlist {
    constructor(name) {
      this.name = name;
      this.songs = [];
    }
  
    addSong(song) {
      if (song instanceof Song) {
        this.songs.push(song);
      } else {
        console.log('Only Song objects can be added to the playlist.');
      }
    }
  
    removeSong(title) {
      this.songs = this.songs.filter(song => song.title !== title);
    }
  
    displayPlaylist() {
      if (this.songs.length === 0) {
        console.log('No songs in this playlist.');
      } else {
        console.log(`Playlist: ${this.name}`);
        this.songs.forEach(song => {
          console.log(song.display());
        });
      }
    }
  }
  
  // Create some Song instances
    // Crear las canciones de la playlist con la clase Song
    const song1 = new Song('Dale Don Dale', 'Don Omar', 'Reggaeton');
    const song2 = new Song('Fanática Sensual', 'Plan B', 'Reggaeton');
    const song3 = new Song('Gasolina', 'Daddy Yankee', 'Reggaeton');
    const song4 = new Song('Una Vaina Loca', 'Fuego', 'Reggaeton');
    const song5 = new Song('Limbo', 'Daddy Yankee', 'Reggaeton');
    const song6 = new Song('Me Rehúso', 'Danny Ocean', 'Latin Pop');
    const song7 = new Song('Angelito Sin Alas', 'DCS, Juan Magán', 'Dancehall');
    const song8 = new Song('El Mambo', 'Kiko Rivera', 'Reggaeton');

  
  // Create a Playlist instance and add songs
  const myPlaylist = new Playlist('My Favorites');
  myPlaylist.addSong(song1);
  myPlaylist.addSong(song2);
  myPlaylist.addSong(song3);
  myPlaylist.addSong(song4);
  myPlaylist.addSong(song5);
  myPlaylist.addSong(song6);
  myPlaylist.addSong(song7);
  myPlaylist.addSong(song8);


  
  // Display the playlist
  myPlaylist.displayPlaylist();
  

