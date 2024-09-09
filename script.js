document.addEventListener('DOMContentLoaded', function() {
    // Welcome button functionality
    const welcomeButton = document.getElementById('welcome-button');
    welcomeButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Hello, welcome to my page!');
    });

    // Change background color on profile picture hover
    const profilePicture = document.getElementById('profile-picture');
    const body = document.body;
    const originalColor = body.style.backgroundColor;

    profilePicture.addEventListener('mouseover', function() {
        body.style.backgroundColor = '#2a2a2a';
    });

    profilePicture.addEventListener('mouseout', function() {
        body.style.backgroundColor = originalColor;
    });
});