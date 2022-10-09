// // using search bar to return a cocktail

// let result = document.getElementById('result');
// let searchBtn = document.getElementById('search-btn');

// let APIurl = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';

let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

let getCocktail = () => {
    let userInp = document.getElementById("search-term").value;

    if (userInp.length == 0) {
        // result.innerHTML = `<h3 class="msg">The search field cannot be empty</h3>`;
      } else {
        fetch(url + userInp)
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("search-term").value = "";
            console.log(data);
            console.log(data.drinks[0]);
            let cocktailSearch = data.drinks[0];

            console.log(cocktailSearch.strDrink);
            console.log(cocktailSearch.strDrinkThumb);
            console.log(cocktailSearch.strInstructions);

        let count = 1;
        let ingredients = [];
        for (let i in cocktailSearch) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && cocktailSearch[i]) {
            ingredient = cocktailSearch[i];
            if (cocktailSearch[`strMeasure` + count]) {
                measure = cocktailSearch[`strMeasure` + count];
            } else {
                measure = "";
            }
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
            }
        }
        console.log(ingredients);

        result.innerHTML = `
      <img src=${cocktailSearch.strDrinkThumb}>
      <h2>${cocktailSearch.strDrink}</h2>
      <h3>Ingredients:</h3>
      <ul class="ingredients"></ul>
      <h3>Instructions:</h3>
      <p>${cocktailSearch.strInstructions}</p>
      `;

        let ingredientsCon = document.querySelector(".ingredients");
        ingredients.forEach((item) => {
          let listItem = document.createElement("li");
          listItem.innerText = item;
          ingredientsCon.appendChild(listItem);
        });
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Please enter a known cocktail</h3>`;
      });
  }
};

window.addEventListener("load", getCocktail);
searchBtn.addEventListener("click", getCocktail);

document.addEventListener("keypress", (getCocktail)=>{
    let keyCode = event.keyCode ? event.keyCode :event.which;
    if (keyCode === 13){
        searchBtn.click();
    }
});


//fetching a random cocktail 

// function getRandomCocktail(){
//     fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
//   .then((response) => response.json())
//   .then((data) => displayRandomCocktail(data));
// }

// getRandomCocktail();

// function displayRandomCocktail(cocktail){
//     console.log(cocktail.drinks[0]); 

//     let result = document.querySelector('#result'); 

//     let cocktailName = document.createElement('h2');
//     cocktailName.innerHTML = cocktail.drinks[0].strDrink;
//     result.appendChild(cocktailName);

//     let randomImg = document.createElement('img');
//     randomImg.src = cocktail.drinks[0].strDrinkThumb;
//     result.appendChild(randomImg);

//     for(let i=1; i<16; i++){
//         console.log(i);

//         if(cocktail.drinks[0][`strIngredient${i}`] == null){
//             break;
//         }

//         let ingredient = document.createElement('ul');
//         ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ' ' + cocktail.drinks[0][`strIngredient${i}`];
//         result.appendChild(ingredient);
//     }

//     let instruction = document.createElement('p');
//     instruction.innerHTML = cocktail.drinks[0].strInstructions;
//     result.appendChild(instruction);
// }


