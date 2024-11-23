// Function to open the lightbox and display the clicked image
function viewFullScreen(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgElement.src; // Set the clicked image as the lightbox image
    lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close the lightbox
function closeFullScreen() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}
