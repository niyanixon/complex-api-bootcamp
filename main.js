
addEventListener("DOMContentLoaded", (event) => {
console.log('PAGE LOADED')

const url = 'https://api.openbrewerydb.org/v1/breweries'
fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
    const lat = element.latitude
    const long = element.longitude
    fetch(`https://currentuvindex.com/api/v1/uvi?latitude=${lat}&longitude=${long}`)
  .then(response => response.json())
  .then(dataTwo => {
    console.log(dataTwo)
   console.log(dataTwo.now.uvi)
   document.querySelector('ul').innerHTML +=
    `<li>Brewery Company: ${element.name}</br>State: ${element.state}</br>UVI: ${dataTwo.now.uvi}</br>Address: ${element.street}</br>Website: ${element.website_url}</li>`
    });
  })

  .catch(error => {
    console.log(`${error}`)
  });

  })
  .catch(error => {
    console.log(`${error}`)
  });
});
