window.onload = function() {
        navResponsive();
        searchFunction();
        createDropdown();
}

const navResponsive = () => {
        const burgerIcon = document.querySelector(".burger")
        const items = document.querySelectorAll(".item");
      

        burgerIcon.addEventListener('click', () => {
                items.forEach((item, index) => {
                        item.classList.toggle("active");
                });
                burgerIcon.classList.toggle('mark')
        });

}

const searchFunction = () => {
        search.addEventListener('click', () => {
                const searchItem = document.getElementById("searchbar").value;
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
                        .then(res => res.json())
                        .then(res => {
                                console.log(res.meals)
                                createMealcard(res.meals)
                        });
        });
}




const createDropdown = () => {

        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
                .then(res => res.json())
                .then(res => {
                        createCategoryList(res.meals)
                });

        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
                .then(res => res.json())
                .then(res => {
                        createAreaList(res.meals)
                });
        
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
                .then(res => res.json())
                .then(res => {
                        createIngredientList(res.meals)
                });
}

function getValueingredient(){
        var ingredient= document.getElementById("ingredient").value;
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(res => res.json())
        .then(res => {
                console.log(res.meals)
                createMealselect(res.meals)
        });
}

function createIngredientList(meal) {
        var ingredientList = [];
        for (x in meal) {
                ingredientList.push(meal[x].strIngredient);
        }
        var select = document.createElement("select");
        select.name = "ingredient";
        select.id = "ingredient";
        select.href ="#card"
        var option = document.createElement("option");
        option.value = "Ingriedient";
        option.text = "Ingredient";
        select.appendChild(option);  

        for (const val of ingredientList) {
                var option = document.createElement("option");
                option.value = val;
                option.text = val.charAt(0).toUpperCase() + val.slice(1);
                select.appendChild(option);
        }
     

        var label = document.createElement("label");
        label.classList.add("droplabel");
        label.innerHTML = "Search for Ingredient: "
        label.htmlFor = "ingredient";

        document.getElementById("dropdown").appendChild(label).appendChild(select);
        var area = document.getElementById("ingredient")
        area.onchange = function(){getValueingredient();};
}


function getValueArea(){
        var area= document.getElementById("area").value;
        console.log(area);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        .then(res => res.json())
        .then(res => {
                console.log(res.meals)
                createMealselect(res.meals)
        });
}


function createAreaList(meal) {
        var areaList = [];
        for (x in meal) {
                areaList.push(meal[x].strArea);
        }
        var select = document.createElement("select");
        select.name = "area";
        select.id = "area";
       
        var option = document.createElement("option");
        option.value = "Area";
        option.text = "Area";
        select.appendChild(option);  

        for (const val of areaList) {
                var option = document.createElement("option");
                option.value = val;
                option.text = val.charAt(0).toUpperCase() + val.slice(1);
                select.appendChild(option);
        }
     

        var label = document.createElement("label");
        label.classList.add("droplabel");
        label.innerHTML = "Search for Areas: "
        label.htmlFor = "area";

        document.getElementById("dropdown").appendChild(label).appendChild(select);
        var area = document.getElementById("area")
        area.onchange = function(){getValueArea();};
}

function getValueCategory(){
        var category= document.getElementById("category").value;
        console.log(category);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
        .then(res => {
                console.log(res.meals)
                createMealselect(res.meals)
        });
}

function createCategoryList(meal) {
        var categoryList = [];
        for (x in meal) {
                categoryList.push(meal[x].strCategory);
        }
        var select = document.createElement("select");
        select.name = "category";
        select.id = "category"

        var option = document.createElement("option");
        option.value = "Category";
        option.text = "Category";
        select.appendChild(option); 

        for (const val of categoryList) {
                var option = document.createElement("option");
                option.value = val;
                option.text = val.charAt(0).toUpperCase() + val.slice(1);
                select.appendChild(option);
        }

        var label = document.createElement("label");
        label.classList.add("droplabel");
        label.innerHTML = "Search for Catagories: "
        label.htmlFor = "catogory";

        document.getElementById("dropdown").appendChild(label).appendChild(select);
        var category = document.getElementById("category")
        category.onchange = function(){getValueCategory();};
}




function createMealselect(meals) {
        document.getElementById("gridContainer").innerHTML = "";
        const gridContainer = document.getElementById("gridContainer");
        for (x in meals) {
                gridContainer.innerHTML += `
<div id="card" class="article">
<img src="${meals[x].strMealThumb}" loading="lazy" alt="Sample photo">
<div class="text">
  <h3>${meals[x].strMeal}</h3>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque beatae ducimus quisquama.</p>
  <a href="/html/recipe.html?${meals[x].idMeal}" class="btn see-recipe">See Recipe</a>
</div>
</div>
`
        }
}


function createMealcard(meals) {
        document.getElementById("gridContainer").innerHTML = "";
        const gridContainer = document.getElementById("gridContainer");
        for (x in meals) {
                gridContainer.innerHTML += `
<div id="card" class="article">
<img src="${meals[x].strMealThumb}" loading="lazy" alt="Sample photo">
<div class="text">
  <h3>${meals[x].strMeal}</h3>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque beatae ducimus quisquama.</p>
  <ul class="label"><li>${meals[x].strCategory}</li><li>${meals[x].strArea}</li></ul>
  <a href="/html/recipe.html?${meals[x].idMeal}" class="btn see-recipe">See Recipe</a>
</div>
</div>
`
        }
}

function navClose(){
        const burgerIcon = document.querySelector(".burger")
        const items = document.querySelectorAll(".item");
      

        
                items.forEach((item, index) => {
                        item.classList.toggle("active");
                });
                burgerIcon.classList.toggle('mark')

}

function openS(){
        var blur= document.getElementById('blur');
        blur.classList.add('active');
        var popup= document.getElementById('popupS');
        popup.classList.add('active');
        console.log("toggle1")
        navClose();

    }

    function openL(){
        var blur= document.getElementById('blur');
        blur.classList.add('active');
        var popup= document.getElementById('popupL');
        popup.classList.add('active');
        console.log("toggle2")
        navClose();
    }

    function toggle(){
        var popupL= document.getElementById('popupL');
        var popupS= document.getElementById('popupS');
        popupL.classList.toggle('active');
        popupS.classList.toggle('active');
    }

    function closePopup(){
        var popupL= document.getElementById('popupL');
        var popupS= document.getElementById('popupS');
        var blur= document.getElementById('blur');
        blur.classList.remove('active');
        popupL.classList.remove('active');
        popupS.classList.remove('active');
    }