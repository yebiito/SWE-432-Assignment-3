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










