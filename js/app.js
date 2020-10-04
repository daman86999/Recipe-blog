const $titleHide =  document.querySelector(".title");
const $menuBtn = document.querySelector(".menu-btn");
const $navExp = document.querySelector("nav");
let isMenuOpen = false;
$menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    $menuBtn.classList.add("open");
    $navExp.style.transform="translateX(0px)";
    $menuBtn.style.transform="translateX(230px)"
    $titleHide.style.opacity="0";
  } else {
    $menuBtn.classList.remove("open");
    $navExp.style.transform="translateX(-230px)";
    $menuBtn.style.transform="translateX(0px)"
    $titleHide.style.opacity="1"
  }
  isMenuOpen = !isMenuOpen;
 
});
