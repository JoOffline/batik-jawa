document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterControls = document.querySelector('.filter-controls');

    function setActiveButton(activeButton) {
        // Calculate the width and the left offset of the button
        const buttonWidth = activeButton.offsetWidth + 'px';
        const buttonLeft = activeButton.offsetLeft + 'px';

        // Set the CSS variables for the sliding background
        filterControls.style.setProperty('--before-width', buttonWidth);
        filterControls.style.setProperty('--before-left', buttonLeft);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            this.classList.add('active');

            // Move the sliding background to the active button
            setActiveButton(this);
        });
    });

    // Initialize the sliding background position for the first active button
    const activeButton = document.querySelector('.filter-btn.active') || filterButtons[0];
    setActiveButton(activeButton);
});
