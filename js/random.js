window.onload = function () {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
  navResponsive();
};

const navResponsive = () => {
  const burgerIcon = document.querySelector(".burger");
  const items = document.querySelectorAll(".item");
  const search = document.getElementById("search");

  burgerIcon.addEventListener("click", () => {
    items.forEach((item, index) => {
      item.classList.toggle("active");
    });
    burgerIcon.classList.toggle("mark");
  });
};

function createMeal(meal) {
  const mealContainer = document.getElementById("meal");
  let mealIns = `${meal.strInstructions}`;
  mealIns = "." + mealIns;
  var lines = mealIns.split(".");
  lines.pop();
  console.log(lines);
  var list = lines.join("<li>");

  const ingredients = [];
  const oingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      oingredients.push(`${meal[`strIngredient${i}`]}`);
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  mealContainer.innerHTML = `
        <div class="row">
        </h3>
            <div class="col-lg-4 mealDisc">
                <h5 class="mt-3 mealNm d-lg-none" >${meal.strMeal}</h5>
                 <img class="img-fluid  mealImg mt-4" loading="lazy" src="${
                   meal.strMealThumb
                 }" alt="Meal Img"></img> 
                 <h6 class="mt-4 ml-3">Category : ${meal.strCategory}</h6> 
                 <h6 class="mt-2 ml-3 ">Origin : ${meal.strArea}</h6> 
                <h6 class="mt-3 ml-3 mealNm">Ingredients</h6>
                 <ul class="ingredient-list">
                 ${ingredients
                   .map(
                     (ingredient) =>
                       `<img src="https://www.themealdb.com/images/ingredients/${(ngredient = ingredient.substring(
                         0,
                         ingredient.indexOf(" -")
                       ))}-Small.png"><li>${ingredient}</li>`
                   )
                   .join("")}
				</ul>              
            </div>
            <div class="col-lg-8 "> <h2 class="mt-3  mealNm d-none d-lg-block" >${
              meal.strMeal
            }</h3>
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

function checkFirstName(n) {
  var illegalChars = /\W/;
  if (n.value === "") {
    alert("Please enter Username 😶");
    n.focus();
  } else if (!illegalChars.test(n.value)) {
    alert("Username cannot be a number.");
    n.focus();
  }else {
    alert("Submitted successfully.🤭")
    closePopup();
  }
}

function checkValidationS(email) {
  console.log(email.value);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    checkFirstName(document.getElementById("firstName"));
  } else if (email.value == "") {
    alert("Enter email pls");
    email.focus();
  } else {
    alert("Enter valid password minimum 6 characters, 1 Uppercase letter, 1 digit");
    email.focus();
  }
}

function checkValidationL(email) {
  console.log(email.value);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    checkPassword(document.getElementById("password"));
  } else if (email.value == "") {
    alert("Please enter email ");
    email.focus();
  } else {
    alert("Enter valid password minimum 6 characters, 1 Uppercase letter, 1 digit");
    email.focus();
  }
}

function checkPassword(password) {
  if (/^[A-Za-z]\w{7,14}$/.test(password.value)) {
    alert("Submitted successfully.🤭")
    closePopup();
  } else if (password.value == "") {
    alert("Enter password pls");
    password.focus();
  } else {
    alert("Enter valid password");
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

function openS() {
  var blur = document.getElementById("blur");
  blur.classList.add("active");
  var popup = document.getElementById("popupS");
  popup.classList.add("active");
  console.log("toggle1");
  navClose();
}

function openL() {
  var blur = document.getElementById("blur");
  blur.classList.add("active");
  var popup = document.getElementById("popupL");
  popup.classList.add("active");
  console.log("toggle2");
  navClose();
}

function toggle() {
  var popupL = document.getElementById("popupL");
  var popupS = document.getElementById("popupS");
  popupL.classList.toggle("active");
  popupS.classList.toggle("active");
}


function checkValidationSub(email) {
  console.log(email.value);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert("Subscribed successfully.🤭")
  } else if (email.value == "") {
    alert("Please Enter Email 😅");
    email.focus();
  } else {
    alert("Enter valid email 😥");
    email.focus();
  }
}

function closePopup() {
  var popupL = document.getElementById("popupL");
  var popupS = document.getElementById("popupS");
  var blur = document.getElementById("blur");
  var popupSub = document.getElementById("subscribe");
  blur.classList.remove("active");
  popupL.classList.remove("active");
  popupS.classList.remove("active");
  popupSub.classList.remove("active");
}


function openSub() {
  var blur = document.getElementById("blur");
  blur.classList.add("active");
  var sub = document.getElementById("subscribe");
  sub.classList.add("active");
  console.log("toggle2");
  navClose();
}

