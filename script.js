// Assuming you start in dark mode.
let darkMode = true;

function toggleTheme() {
  if (darkMode) {
    document.documentElement.setAttribute("data-theme", "light");
    toggleButton.textContent = "Light Mode"; // Sun for light theme
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleButton.textContent = "Dark Mode"; // Moon for dark theme
  }
  darkMode = !darkMode;
}

// Create the button to toggle the theme
const toggleButton = document.createElement("button");
toggleButton.textContent = "Dark Mode"; // Default to moon since we're starting in dark mode
toggleButton.addEventListener("click", toggleTheme);

// Insert the button right after the header
const header = document.querySelector("header");
header.parentNode.insertBefore(toggleButton, header.nextSibling);
