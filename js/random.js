window.onload=function(){

     fetch('https://www.themealdb.com/api/json/v1/1/random.php')
     .then(res => res.json())
     .then(res => {
         createMeal(res.meals[0])
     });
     navResponsive();
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

function createMeal(meal){
    const mealContainer=document.getElementById("meal");
    let mealIns=`${meal.strInstructions}`;
    mealIns="."+mealIns;
    var lines=mealIns.split(".");
    lines.pop();
    console.log(lines);
    var list= lines.join("<li>");

    const ingredients = [];
    const oingredients = [];

	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
            oingredients.push(`${meal[`strIngredient${i}`]}`)
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			break;
		}
    }
    
    

    mealContainer.innerHTML=`
        <div class="row">
        </h3>
            <div class="col-lg-4 mealDisc">
                <h5 class="mt-3 mealNm d-lg-none" >${meal.strMeal}</h5>
                 <img class="img-fluid  mealImg mt-4" loading="lazy" src="${meal.strMealThumb}" alt="Meal Img"></img> 
                 <h6 class="mt-4 ml-3">Category : ${meal.strCategory}</h6> 
                 <h6 class="mt-2 ml-3 ">Origin : ${meal.strArea}</h6> 
                <h6 class="mt-3 ml-3 mealNm">Ingredients</h6>
                 <ul class="ingredient-list">
                 ${ingredients.map(ingredient => `<img src="https://www.themealdb.com/images/ingredients/${ngredient=ingredient.substring(0, ingredient.indexOf(' -'))}-Small.png"><li>${ingredient}</li>`).join('')}
				</ul>              
            </div>
            <div class="col-lg-8 "> <h2 class="mt-3  mealNm d-none d-lg-block" >${meal.strMeal}</h3>
            <h6 class="d-block d-lg-none mealNm mt-3 ml-3">Instructions</h6>
            <p class="text-secondary"><ul>${list}</ul></p>
            
            </div>
            <div class="row col-12 mx-auto">
            <h3 class="mealNm mt-3">Video Recipie</h3>
            <div class="embed-responsive embed-responsive-16by9 mb-3">
            <iframe class="embed-responsive-item"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
                </iframe>
            </div>
            </div>
        </div>
    `;
    
}