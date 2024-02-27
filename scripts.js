function toggleMenu() {
  var navbar = document.getElementById("mobile_navbar");
  navbar.classList.toggle("open");

  var menu = document.getElementById("mobile_menu");
  menu.classList.toggle("openMenu");
}

function openPdf(pdf) {
  window.open(pdf, '_blank');
}