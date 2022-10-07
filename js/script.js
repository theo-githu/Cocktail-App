
let result = document.getElementById('cocktail');
let searchBtn = document.getElementById('search-btn');

let APIurl = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';
let userInput = document.getElementById('search-term').value;

if(userInput.length == 0){
    result.innerHTML = '<h4 class="message">The search field cannot be empty</h4>';
} else {
    fetch(APIurl + userInput).then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.drinks[0]);
        let cocktailSearch = data.drinks[0];

        console.log(cocktailSearch.strDrink);
        console.log(cocktailSearch.strDrinkThumb);
        console.log(cocktailSearch.strInstructions);

        let count = 1;
        let ingredients = [];
        for (let i in cocktailSearch){
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && cocktailSearch[i]){
                ingredient = cocktailSearch[i];
                if (cocktailSearch['strMeasure' + count]){
                    measure = cocktailSearch['strMeasure' + count];
                } else {
                    measure = '';
                }
                count += 1; 
                ingredients.push('${Measure} ${Ingredient}');
            }
        }
        console.log(ingredients);
        // result.innerHTML = '        
        // <img src = ${cocktailSearch.strDrinkThumb}>
        // <h2>${cocktailSearch.strDrink}</h2>
        // <h3>Ingredients:</h3>
        // <ul class="ingredients"></ul>
        // <h3>Instructions:</h3>
        // <p>${cocktailSearch.strInstructions}</p>
        // ';
    });
}