window.onscroll = function() {
    var element = document.getElementById("miDisv");
    if (window.scrollY > 30) { /* condición para cambiar el color de fondo */
      element.classList.add("menu-fixed");
    } else {
      element.classList.remove("menu-fixed");
    }
  }
  
  const menu = document.querySelector(".menubar");
  const hamburger= document.querySelector(".buttonhamburger");
  const closeIcon= document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");
  
  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }
  hamburger.addEventListener("click", toggleMenu);
  
  const nav = document.querySelector(".menubar");
  const navLinks = nav.querySelectorAll("a");
  const currentURL = window.location.href;
  navLinks.forEach((link) => {
      if (link.href === currentURL) {
        link.classList.add("active");
      }
  });
  var tituloOriginal = document.title;
          window.onblur = function(){ 
              document.title = "Servicios Técnologicos | Desarrollo Web";
      }
      window.onfocus = function(){
      document.title = tituloOriginal;
      }