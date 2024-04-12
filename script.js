document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');
    var conversion = document.getElementById('conversion');

    hamburger.addEventListener('click', function() {
        // Toggle display for navLinks
        if (navLinks.style.display === 'none' || navLinks.style.display === '') {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }

        // Toggle display for conversion
        if (conversion.style.display === 'none' || conversion.style.display === '') {
            conversion.style.display = 'flex';
        } else {
            conversion.style.display = 'none';
        }
    });
});
