const darkModeSwitch = document.querySelector('#dark-mode-switch');

// Controleer of de gebruiker een voorkeur heeft voor dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Stel de switch in op basis van de voorkeur
darkModeSwitch.checked = prefersDarkMode;

// Voeg de dark-mode klasse toe als de voorkeur dark mode is
if (prefersDarkMode) {
  document.body.classList.add('dark-mode');
}

// Functie om dark mode aan/uit te schakelen
function handleDarkModeToggle() {
  document.body.classList.toggle('dark-mode');
}

// Luister naar wijzigingen in de switch
darkModeSwitch.addEventListener('change', handleDarkModeToggle);