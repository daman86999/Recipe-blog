window.onload = function () {
  searchFunction();
  createDropdown();
};

const searchFunction = () => {
  search.addEventListener("click", () => {
    const searchItem = document.getElementById("searchbar").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.meals);
        createMealcard(res.meals);
      });
  });
};

const createDropdown = () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    .then((res) => res.json())
    .then((res) => {
      createCategoryList(res.meals);
    });

  fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    .then((res) => res.json())
    .then((res) => {
      createAreaList(res.meals);
    });

  fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    .then((res) => res.json())
    .then((res) => {
      createIngredientList(res.meals);
    });
};

function getValueingredient() {
  createDropdown;
  var ingredient = document.getElementById("ingredient").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.meals);
      createMealselect(res.meals);
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
  select.href = "#card";
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
  label.innerHTML = "Search for Ingredient: ";
  label.htmlFor = "ingredient";

  document.getElementById("dropdown").appendChild(label).appendChild(select);
  var area = document.getElementById("ingredient");
  area.onchange = function () {
    getValueingredient();
  };
}

function getValueArea() {
  var area = document.getElementById("area").value;
  console.log(area);
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.meals);
      createMealselect(res.meals);
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
  label.innerHTML = "Search for Areas: ";
  label.htmlFor = "area";

  document.getElementById("dropdown").appendChild(label).appendChild(select);
  var area = document.getElementById("area");
  area.onchange = function () {
    getValueArea();
  };
}

function getValueCategory() {
  var category = document.getElementById("category").value;
  console.log(category);
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.meals);
      createMealselect(res.meals);
    });
}

function createCategoryList(meal) {
  var categoryList = [];
  for (x in meal) {
    categoryList.push(meal[x].strCategory);
  }
  var select = document.createElement("select");
  select.name = "category";
  select.id = "category";

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
  label.innerHTML = "Search for Catagories: ";
  label.htmlFor = "catogory";

  document.getElementById("dropdown").appendChild(label).appendChild(select);
  var category = document.getElementById("category");
  category.onchange = function () {
    getValueCategory();
  };
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
`;
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
`;
  }
}

function checkPasswordS() {
  var p1 = document.getElementById("spassword").value;
  if (p1 === "") {
    alert("Enter password pls");
    document.getElementById("spassword").focus();
  } else if (/^[A-Za-z]\w{7,14}$/.test(p1)) {
    checkPasswordc();
  } else {
    alert(
      "Enter valid password minimum 6 characters, 1 Uppercase letter, 1 digit"
    );
    document.getElementById("spassword").focus();
  }
}

function checkPasswordc() {
  var p1 = document.getElementById("spassword").value;
  var p2 = document.getElementById("cpassword").value;
  if (p2 === "") {
    alert("Please enter Confirm password");
    document.getElementById("cpassword").focus();
  } else if (p1 === p2) {
    alert("Submitted successfully");
    console.log("insidecheck");
    closePopup();
  } else {
    alert("Passwords don't match");
    document.getElementById("cpassword").focus();
  }
}

function checkFirstName(n) {
  var illegalChars = /\W/;
  if (n.value === "") {
    alert("Please enter Username 😶");
    n.focus();
  } else if (!illegalChars.test(n.value)) {
    alert("Username cannot be a number.");
    n.focus();
  } else {
    checkPasswordS();
  }
}

function checkValidationS(email) {
  console.log(email.value);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    checkFirstName(document.getElementById("firstName"));
  } else if (email.value == "") {
    alert("Please Enter Email 😅");
    email.focus();
  } else {
    alert("Enter valid email 😥");
    email.focus();
  }
}

function checkValidationL(email) {
  console.log(email.value);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    checkPassword(document.getElementById("password"));
  } else if (email.value == "") {
    alert("Please Enter Email 😅");
    email.focus();
  } else {
    alert("Enter valid email 😥");
    email.focus();
  }
}

function checkValidationSub(email) {
  console.log(email.value);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert("Subscribed successfully.🤭");
  } else if (email.value == "") {
    alert("Please Enter Email 😅");
    email.focus();
  } else {
    alert("Enter valid email 😥");
    email.focus();
  }
}

function checkPassword(password) {
  if (/^[A-Za-z]\w{7,14}$/.test(password.value)) {
    alert("Loged In Successfully 😁.");
    closePopup();
  } else if (password.value == "") {
    alert("Enter password pls");
    password.focus();
  } else {
    alert(
      "Enter valid password minimum 6 characters, 1 Uppercase letter, 1 digit"
    );
    password.focus();
  }
}

function navClose() {
  const burgerIcon = document.querySelector(".burger");
  const items = document.querySelectorAll(".item");

  items.forEach((item, index) => {
    item.classList.toggle("active");
  });
  burgerIcon.classList.toggle("mark");
}
