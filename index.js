document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  // If the click is not on a dropdown button and not inside a dropdown, do nothing
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  // If the click is on a dropdown button, toggle the dropdown
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  // If the click is outside any dropdown, close all dropdowns
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
