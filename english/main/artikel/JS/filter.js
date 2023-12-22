document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the filter value from the clicked button
            const filterValue = this.getAttribute('data-filter');
            
            // Loop over each gallery item
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = ''; // Show all items
                } else {
                    // Check if the item's category matches the filter value
                    if (item.getAttribute('data-category') === filterValue) {
                        item.style.display = ''; // Show the item
                    } else {
                        item.style.display = 'none'; // Hide the item
                    }
                }
            });
        });
    });
});
