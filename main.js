


document.querySelector('.foodbtn').addEventListener('click', findFood)

function findFood(){
    const userInput = document.querySelector('input').value
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`
    fetch(url)
      .then(response => response.json())
      //inputting an ingredient and its returning the first meal that comes up and putting it into the second api
      .then(dataOne => {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dataOne.meals[0].strMeal}`)
    })
    .then(response => response.json())
    // giving us the recipe name and the ingredients for the first meal from the first api link
    .then(dataTwo => {
        console.log(dataTwo)

        document.querySelector('.name').innerText = dataTwo.meals[0].strMeal
        document.querySelector('.picture').src = dataTwo.meals[0].strMealThumb
        document.querySelector('.instructions').innerText = dataTwo.meals[0].strInstructions
    })
      .catch(error => {
        console.log(`${error}`)
    });

}
