function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle-button");
  const toggleInput = document.getElementById("toggle");

  // Retrieve user preference from localStorage
  const storedThemePreference = localStorage.getItem("darkMode");

  // Apply initial theme based on user preference
  const isDarkModePreferred = storedThemePreference === "true";
  applyTheme(isDarkModePreferred);
  toggleInput.checked = isDarkModePreferred;

  // Toggle theme on button click
  themeToggleButton.addEventListener("click", () => {
    const isDarkMode = toggleInput.checked;
    applyTheme(isDarkMode);

    // Store user preference in localStorage
    localStorage.setItem("darkMode", isDarkMode);
  });

  function applyTheme(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }
});


