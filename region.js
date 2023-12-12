var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

 function  showData3() {
    const result = JSON.parse(request.responseText);
    const demo = document.getElementById('demo');

    let count = 1; 
    const filteredCountries = result.filter(country => country.region == 'Asia' && country.population);

    const mapValues = result.map((c)=>c.name)

    console.log(mapValues);
    // console.log('filteredCountries : '+filteredCountries);

    let val=0;

    filteredCountries.forEach((country,number) => {

        val=val+country.population;

        var ul = document.createElement('p');
        ul.textContent = `Asia Country Only ${number+1} : ${country.name.common} : ${country.capital} ${country.flag}`
        demo.appendChild(ul)
    });
    

};

 const nm = 'imthi';
 console.log(typeof nm);
const name1 = nm.split('');
console.log(typeof name1);


