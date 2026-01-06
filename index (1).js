// Locate the elements on the page
const button = document.getElementById('magicButton');
const message = document.getElementById('message');

// Add a "click" event listener
button.addEventListener('click', () => {
    message.textContent = "✨ The code is working perfectly!";
    console.log("Button was clicked!");
});