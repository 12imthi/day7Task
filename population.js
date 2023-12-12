var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();


 function  showData1() {
    const result = JSON.parse(request.responseText);
    const demo = document.getElementById('demo');

    let count = 1; 
    const filteredCountries = result.filter(country => country.population < 200000);

    console.log('filteredCountries : '+filteredCountries);

    filteredCountries.forEach((country,number) => {
        var ul = document.createElement('p');
        ul.textContent = `(Less than 2Lake population country) ${number+1} : ${country.name.common} `
        demo.appendChild(ul)
    });
    

};



