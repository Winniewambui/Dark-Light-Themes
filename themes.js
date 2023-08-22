//dark-theme function
export function toggleDarkMode() {
  const toggleBtn = document.querySelector(".toggle");

  toggleBtn.addEventListener("click", toggleDarkMode);
  document.body.classList.toggle("dark-theme");
}
