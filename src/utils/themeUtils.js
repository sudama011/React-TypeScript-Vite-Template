// Constants for theme values
const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

// Function to set the theme and store it in localStorage
const setTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === THEMES.DARK);
  localStorage.setItem("theme", theme);
};

// Function to get the theme from localStorage
const getTheme = () => {
  return localStorage.getItem("theme") || THEMES.LIGHT;
};

// Function to set the theme based on system preference
const setSystemTheme = () => {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  setTheme(systemPrefersDark ? THEMES.DARK : THEMES.LIGHT);
};

// Function to toggle between dark and light themes
const toggleTheme = () => {
  const currentTheme = localStorage.getItem("theme") || THEMES.LIGHT;
  setTheme(currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
};

// Initialize the theme based on saved preference or system preference
export const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setSystemTheme();
  }
};

export { toggleTheme, getTheme, THEMES, setTheme, setSystemTheme };
