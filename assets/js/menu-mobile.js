const containerBtn = document.querySelector(".btn-menu-mobile");
const btnOpenMenu = document.querySelector(".open-icon");
const btnCloseMenu = document.querySelector(".close-icon");
const menuMobile = document.querySelector(".menu-mobile");
const linkMenuMobile = document.getElementsByClassName("link-menu-mobile");

containerBtn.addEventListener("click", () => {
  if (menuMobile.classList.toggle("active")) {
    btnOpenMenu.style.display = "none";
    btnCloseMenu.style.display = "block";
  } else {
    btnOpenMenu.style.display = "block";
    btnCloseMenu.style.display = "none";
  }
}); // Evento que alterna os icones de abrir e fechar menu, se o menu mobile estiver ou não ativo.

Array.from(linkMenuMobile).forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    btnOpenMenu.style.display = "block";
    btnCloseMenu.style.display = "none";
  });
}); // Array que garante com que cada link do menu mobile terá o evento de fechar o menu ao ser clicado.
