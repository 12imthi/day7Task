var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

function showData() {
  const result = JSON.parse(request.responseText);
  const demo = document.getElementById("demo");
  const demo2 = document.getElementById("demo");

  // const filteredCountries = result.filter(country => country.region == 'Asia' && country.population);
  const mapValues = result.map((c) => c.population);
  let totalPopulation = 0;

  for (let i = 0; i < mapValues.length; i++) {
    console.log(mapValues[i]);
    totalPopulation += mapValues[i];

    demo.textContent = totalPopulation;


  }

  console.log('Total Population:', totalPopulation);
 
  console.log("values : " + mapValues);
 
}
