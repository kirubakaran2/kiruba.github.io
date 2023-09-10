document.addEventListener("DOMContentLoaded", function() {
    // Select the navigation bar
    const navBar = document.querySelector(".navcontentholder");

    // Apply a class to trigger the fade-in effect after a short delay
    setTimeout(function() {
        navBar.style.opacity = "1"; // Set opacity to 1 to make it fade in
    }, 100); // Adjust the delay as needed
});