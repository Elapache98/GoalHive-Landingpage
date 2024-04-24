document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');
    var conversion = document.getElementById('conversion');

// Initially show the navigation links and conversion items till window is resized.
    navLinks.style.display = 'flex';
conversion.style.display = 'none';





// Function to handle hamburger menu click event
    function toggleMenu() {
        // Toggle display for navLinks and conversion
        const shouldDisplay = navLinks.style.display === 'none' || navLinks.style.display === '';
        navLinks.style.display = shouldDisplay ? 'flex' : 'none';
        conversion.style.display = shouldDisplay ? 'flex' : 'none';
    }

// Event listener for window resize
window.addEventListener('resize', function() {
    // Reset display for navLinks and conversion when window size changes
    if (window.innerWidth > 800) {
        navLinks.style.display = 'flex';
        conversion.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
        conversion.style.display = 'none';
    }
});

// Event listener for hamburger menu click
hamburger.addEventListener('click', toggleMenu);

});

function filterSelection(filter) {
    // Hide all filter elements
    var allFilterElements = document.querySelectorAll('[class^="reflectionContent"]');
    allFilterElements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Show selected filter elements
    var selectedFilterElements = document.querySelectorAll('.reflectionContent' + filter);
    selectedFilterElements.forEach(function(element) {
        element.style.display = 'block';

          // Reset button states
    var filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(function(button) {
        button.classList.remove('activeFilter');
        button.classList.add('inactiveFilter');
    });

    // Set active state for the clicked button
    var clickedButton = event.target;
    clickedButton.classList.remove('inactiveFilter');
    clickedButton.classList.add('activeFilter');
    });



}
