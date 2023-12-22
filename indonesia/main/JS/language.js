// Get the elements
const optionMenu = document.querySelector(".language-toggle"),
      selectBtn = optionMenu.querySelector(".select-btn-language"),
      options = optionMenu.querySelectorAll(".option-language");

// Toggle the options on select button click
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

// Update the select button text and image on option selection
options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOptionText = option.querySelector(".option-text-language").innerText;
        let selectedOptionImageSrc = option.querySelector("img").src;
        
        selectBtn.querySelector(".sBtn-text-language").innerText = selectedOptionText;
        selectBtn.querySelector(".flag-icon").src = selectedOptionImageSrc;

        optionMenu.classList.remove("active");
    });
});

// Hide the options when clicking outside the menu
document.addEventListener("click", (e) => {
    if (!optionMenu.contains(e.target)) {
        optionMenu.classList.remove("active");
    }
});

