window.onload=function(){
    navFade();
  }
  
  const navFade = () => {
    const burgerIcon=document.querySelector(".burger")
    const items = document.querySelectorAll(".item");
    
    burgerIcon.addEventListener('click', () => {
      items.forEach((item,index)=>{
        item.classList.toggle("active")
        if(item.style.animation){
          item.style.animation = "";
        }
        else{
          item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
      });
      burgerIcon.classList.toggle('mark')
    });
  };