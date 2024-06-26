/* ----- NAVIGATION BAR FUNCTION ----- */
function toggleMenu(){
  var menuBtn = document.getElementById("navMenu");

  if(menuBtn.className === "menu-section"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "menu-section";
  }
}

/*=============== GSAP ANIMATION ===============*/
