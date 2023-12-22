document.addEventListener('DOMContentLoaded', function () {
    var languageSelect = document.getElementById('language-select');
    var chevronIcon = document.querySelector('.language-chevron');

    chevronIcon.addEventListener('click', function() {
        // Focus on the select element
        languageSelect.focus();
    });
});
