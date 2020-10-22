window.onload=function(){
    navResponsive();
    searchFunction();
  }
  
  const navResponsive = () => {
    const burgerIcon=document.querySelector(".burger")
    const items = document.querySelectorAll(".item");
    const search = document.getElementById("search");

    
    burgerIcon.addEventListener('click', () => {
      items.forEach((item,index)=>{
        item.classList.toggle("active");
      });
      burgerIcon.classList.toggle('mark')
    });

}

const searchFunction = () => {
  search.addEventListener('click', () =>{
    const searchItem=document.getElementById("searchbar").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
    .then(res => res.json())
     .then(res => {
        console.log(res.meals)
         createMealcard(res.meals)
     });
  });
}

function createMealcard(meals){
  const cardContainer= document.getElementById("cardContainer");
  cardContainer.innerHTML=`
  <div class="five-column shadow-sm rounded-20">
  <div class="p-20">
      <h3 class="card-title"><b> ${meals[0].strMeal} </b></h3>
      <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit rem hic placeat accusantium veritatis.</p>
      <a href="" class="btn btn-white"> Buy Now</a>
  </div>
  <div class="centered" style="padding: 10px;">
      <img class=" card-image" src="${meals[0].strMealThumb}" alt="">                    
  </div>    
</div>
  `

}