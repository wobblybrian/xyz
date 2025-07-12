function mobileMenu() {
  const body = document.body;
  const menu = document.getElementById("mobile-menu");
  const button = document.getElementById("menu-button");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
    body.style.overflow = "";
    button.textContent= "Menu";

  } else {
    menu.style.display = "flex";
    body.style.overflow = "hidden";
    button.textContent = "Close";
  }
}