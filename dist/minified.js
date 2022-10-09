let result=document.getElementById("result"),searchBtn=document.getElementById("search-btn"),url="https://thecocktaildb.com/api/json/v1/1/search.php?s=",getCocktail=()=>{let e=document.getElementById("search-term").value;0==e.length||fetch(url+e).then(e=>e.json()).then(e=>{document.getElementById("search-term").value="",console.log(e),console.log(e.drinks[0]);let t=e.drinks[0];console.log(t.strDrink),console.log(t.strDrinkThumb),console.log(t.strInstructions);let n=1,r=[];for(let s in t){let l="",i="";s.startsWith("strIngredient")&&t[s]&&(l=t[s],i=t["strMeasure"+n]?t["strMeasure"+n]:"",n+=1,r.push(`${i} ${l}`))}console.log(r),result.innerHTML=`
      <img src=${t.strDrinkThumb}>
      <h2>${t.strDrink}</h2>
      <h3>Ingredients:</h3>
      <ul class="ingredients"></ul>
      <h3>Instructions:</h3>
      <p>${t.strInstructions}</p>
      `;let a=document.querySelector(".ingredients");r.forEach(e=>{let t=document.createElement("li");t.innerText=e,a.appendChild(t)})}).catch(()=>{result.innerHTML='<h3 class="msg">Please enter a known cocktail</h3>'})};function getRandomCocktail(){fetch("https://thecocktaildb.com/api/json/v1/1/random.php").then(e=>e.json()).then(e=>displayRandomCocktail(e))}function displayRandomCocktail(e){console.log(e.drinks[0]);let t=e.drinks[0];document.querySelector("#random");document.createElement("img").src=t.strDrinkThumb;document.createElement("h2").innerHTML=t.strDrink;let n=1,r=[];for(let s in t){let l="",i="";s.startsWith("strIngredient")&&t[s]&&(l=t[s],i=t["strMeasure"+n]?t["strMeasure"+n]:"",n+=1,r.push(`${i} ${l}`))}console.log(r);document.createElement("p").innerHTML=t.strInstructions,result.innerHTML=`
      <img src=${t.strDrinkThumb}>
      <h2>${t.strDrink}</h2>
      <h3>Ingredients:</h3>
      <ul class="ingredients"></ul>
      <h3>Instructions:</h3>
      <p>${t.strInstructions}</p>
      `;let a=document.querySelector(".ingredients");r.forEach(e=>{let t=document.createElement("li");t.innerText=e,a.appendChild(t)})}window.addEventListener("load",getCocktail),searchBtn.addEventListener("click",getCocktail),document.addEventListener("keypress",e=>{13===(event.keyCode?event.keyCode:event.which)&&searchBtn.click()}),getRandomCocktail();
