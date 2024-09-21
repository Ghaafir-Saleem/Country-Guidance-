let btn = document.querySelector(`.btn`);
let countryinput = document.querySelector(`.input-value`);
let results = document.querySelector(`#results`)
let content = document.querySelector(`.content`)





btn.addEventListener(`click`, () => {
    let countryName = countryinput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // console.log(finalURL);
    fetch(finalURL)
        .then((Response) => Response.json())
        .then((data) => {
            // console.log(data[0]);
            // console.log(data[0].name.common)
            // console.log(data[0].flags.svg)
            // console.log(data[0].capital[0])
            // console.log(data[0].continents)
            // console.log(data[0].population)
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
            // console.log(Object.values(data[0].languages).toString().split(",").join(","))

            results.innerHTML =
                `<img src = "${data[0].flags.svg}" class = "flag-img">
                 <h3>${data[0].name.common}</h3>`

            content.innerHTML =
                `<h4>Capital: <span> ${data[0].capital[0]} </span></h4>
                <h4>Continents: <span> ${data[0].continents} </span></h4>
                <h4>Population: <span> ${data[0].population} </span></h4>
                <h4>Currencies: <span> ${data[0].currencies[Object.keys(data[0].currencies)].name} </span></h4>
                <h4>Languages:  <span> ${Object.values(data[0].languages).toString().split(",").join(",")} </span></h4> `
            
        }).catch(()=>{
            if(countryName.length == 0){
                results.innerHTML = `<h3 class ="redone">The input field cannot be empty<h3>`
            }
            else{
                 results.innerHTML = `<h3 class ="redone">Please enter a valid country name<h3>`
            }

        });
});