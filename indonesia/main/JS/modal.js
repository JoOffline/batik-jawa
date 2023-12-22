// Get the modal element
var modal = document.getElementById('batikModal');

// Get the modal image, title, and description elements
var modalImage = document.getElementById('modalImage');
var modalTitle = document.getElementById('modalTitle');
var modalDesc = document.getElementById('modalDesc');

// Get the <span> element that closes the modal
var closeModalSpan = document.getElementsByClassName("close")[0];

// Get the button that closes the modal
var closeModalButton = document.getElementById('modalCloseBtn');

// Get all gallery items
var galleryItems = document.querySelectorAll('.gallery-item');

// Function to open modal with dynamic content
function openModal(src, title, desc) {
  modal.style.display = "block";
  modalImage.src = src;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
}

// Gallery items click event
galleryItems.forEach(item => {
  item.onclick = function() {
    var imgSrc = this.querySelector('img').src;
    var title = this.getAttribute('data-title'); // Custom title from data attribute
    var desc = this.getAttribute('data-description'); // Custom description from data attribute
    openModal(imgSrc, title, desc);
  }
});

// Close modal events
closeModalSpan.onclick = closeModalButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
