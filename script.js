document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');
    var conversion = document.getElementById('conversion');

    // Function to handle hamburger menu click event
    function toggleMenu() {
        // Toggle display for navLinks and conversion
        if (navLinks.style.display === 'none' || navLinks.style.display === '') {
            navLinks.style.display = 'flex';
            conversion.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
            conversion.style.display = 'none';
        }
    }
    // Event listener for hamburger menu click
    hamburger.addEventListener('click', toggleMenu);

    // Event listener for window resize
    window.addEventListener('resize', function() {
        // Reset display for navLinks and conversion when window size changes
        if (window.innerWidth > 770) {
            navLinks.style.display = 'flex';
            conversion.style.display = 'flex';
        }
        else {
            if (window.innerWidth < 770 || window.innerWidth === 770) {
                navLinks.style.display = 'none';
                conversion.style.display ='none';
            }
        }
    });


});
