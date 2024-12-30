function submitName(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('displayName').textContent = `Hello, ${name}!`;
    document.getElementById('popupForm').style.display = 'none';
    
    showSecondPopup(name);
}

function showSecondPopup(name) {
    const secondPopup = document.createElement('div');
    secondPopup.className = 'popup-overlay';
    secondPopup.innerHTML = `
        <div class="popup-content">
            <h1>Thank You ${name}!</h1>
            <p>Enjoy my sites.</p>
            <button onclick="closeSecondPopup(this)">Lets go</button>
        </div>
    `;
    document.body.appendChild(secondPopup);
}

function closeSecondPopup(button) {
    button.closest('.popup-overlay').remove();
}

function updateDateTime() {
    const datetimeDisplay = document.getElementById('datetime-display');
    const currentDate = new Date();
    
    const date = currentDate.toDateString();
    const time = currentDate.toLocaleTimeString();
    
    datetimeDisplay.textContent = `${date} ${time}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const lines = document.querySelectorAll('.typing-text');
    
    lines.forEach((line, index) => {
        line.style.visibility = 'hidden';
        setTimeout(() => {
            line.style.visibility = 'visible';
        }, index * 4000); 
    });
});