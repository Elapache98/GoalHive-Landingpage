
function filterSelection(filter) {
    // Hide all filter elements
    var allFilterElements = document.querySelectorAll('[class^="reflectionContent"]');
    allFilterElements.forEach(function (element) {
        element.style.display = 'none';
    });

    // Show selected filter elements
    var selectedFilterElements = document.querySelectorAll('.reflectionContent' + filter);
    selectedFilterElements.forEach(function (element) {
        element.style.display = 'block';

        // Reset button states
        var filterButtons = document.querySelectorAll('.filters button');
        filterButtons.forEach(function (button) {
            button.classList.remove('activeFilter');
            button.classList.add('inactiveFilter');
        });

        // Set active state for the clicked button
        var clickedButton = event.target;
        clickedButton.classList.remove('inactiveFilter');
        clickedButton.classList.add('activeFilter');
    });



}



function sayPause() {
    const scrollText = document.getElementById('scrolltext');
    scrollText.style.animationPlayState = 'paused';
}

function sayGo() {
    const scrollText = document.getElementById('scrolltext');
    scrollText.style.animationPlayState = 'running';
}

const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('show');
    });
});