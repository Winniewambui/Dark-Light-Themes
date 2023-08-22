//dark-theme function
export function toggleDarkMode() {
  const toggleBtn = document.querySelector(".toggle");

  toggleBtn.addEventListener("click", darkThemeMode);
  document.body.classList.toggle("dark-theme");
}
