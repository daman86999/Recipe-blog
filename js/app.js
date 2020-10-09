const $titleHide =  document.querySelector(".title");
const $menuBtn = document.querySelector(".menu-btn");
const $navExp = document.querySelector(".nav-sm");
let isMenuOpen = false;
$menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    $menuBtn.classList.add("open");
    $navExp.style.transform="translateX(0px)";
    $menuBtn.style.transform="translateX(-230px)"
    $menuBtn.style.borderRadius="50%";
    //$titleHide.style.opacity="0";
  } else {
    $menuBtn.classList.remove("open");
    $navExp.style.transform="translateX(270px)";
    $menuBtn.style.transform="translateX(0px)"
    $menuBtn.style.borderRadius="50% 0% 0% 50%";
    //$titleHide.style.opacity="1"
  }
  isMenuOpen = !isMenuOpen;
 
});
