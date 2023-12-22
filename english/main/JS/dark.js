document.addEventListener("DOMContentLoaded", function() {
  const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
  
  // Check if there's a saved preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggleCheckbox.checked = true;
  }

  themeToggleCheckbox.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    localStorage.setItem('darkMode', this.checked);
  });
});

