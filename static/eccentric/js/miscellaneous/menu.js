
const openButton = document.getElementById("burger-button");
const menu = document.getElementById("main-menu");
const closeButton = document.getElementById("close-button");

function toggleMenu() {
  menu.classList.toggle("show");
  openButton.style.display = menu.classList.contains("show") ? "none" : "block";
}

openButton.addEventListener("click", toggleMenu);

document.addEventListener("click", (event) => {
  const isMenuVisible = menu.classList.contains("show");

  if (!isMenuVisible || event.target === openButton) {
    //if menu is not visible or did not click the open button then continue
    return;
  }

  if (!menu.contains(event.target) || event.target === closeButton) {
    toggleMenu(); //if the click is out of menu or the click is the close button then hide menu
  }
});