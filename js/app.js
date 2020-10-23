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
  const gridContainer= document.getElementById("gridContainer");
  for(x in meals){
  gridContainer.innerHTML +=`
  <div class="article">
  <img src="${meals[x].strMealThumb}" alt="Sample photo">
  <div class="text">
    <h3>${meals[x].strMeal}</h3>
    <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
    <ul class="label"><li>${meals[x].strCategory}</li><li>${meals[x].strArea}</li></ul>
    <a href="#" class="btn see-recipe">See Recipe</a>
  </div>
</div>
  `
}
}