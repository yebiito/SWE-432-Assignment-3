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



document.getElementById("apply-filters").addEventListener("click", function(event) {
    const genreSelect = document.getElementById("genre");
    const songSearchInput = document.getElementById("song-search");

    // Eliminar mensaje de error anterior si existe
    const existingError = document.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }

    // Validación para el género y la canción
    if (genreSelect.value === "-- Select Genre --" || songSearchInput.value.trim() === "") {
        event.preventDefault(); // Evitar acción si hay un error
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        errorMessage.style.color = "red";
        errorMessage.textContent = "Pllease select a valid genre and song.";
        document.querySelector(".search-section").appendChild(errorMessage); // Mostrar mensaje de error en el DOM
    } else {
        // Si la validación es correcta, mostrar mensaje de éxito (opcional)
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.style.color = "green";
        successMessage.textContent = "Correctly applied filters.";
        document.querySelector(".search-section").appendChild(successMessage);
    }
});
