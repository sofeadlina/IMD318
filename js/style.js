function smoothScroll(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({ 
        behavior: "smooth",
        block: "center"
    });
}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", smoothScroll);
});

function togglePopup() {
    const overlay = document.getElementById('popup-overlayemail');
    if (overlay.style.display === "none" || !overlay.style.display) {
        overlay.style.display = "flex";
    } else {
        overlay.style.display = "none";
    }
}

function showPopup() {
    document.getElementById('popupemailform').style.display = 'flex';
}

function closePopupemail() {
    document.getElementById('popupemailform').style.display = 'none';
}

// Add event listener for the close button
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closePopup);
});

// Get the button
let myButton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};

myButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
