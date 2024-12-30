window.onload = function() {
            alert("Things Sofea does in her free time.");
        };

function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function playSound() {
    const sound = document.getElementById("clickSound");
    if (!sound.paused && !sound.ended) {
        sound.pause();
    } else {
        sound.play();
    }
}
