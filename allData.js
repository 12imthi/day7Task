function  showData2() {
    const result = JSON.parse(request.responseText);
    console.log(result);
    const demo = document.getElementById('demo');
    let count = 1; 
    const filteredCountries = result.filter(country => {
        if(country.currencies && Object.values(country.currencies)[0].symbol)
            return Object.values(country.currencies).symbol == '$'
        return false;
    });
    console.log('filteredCountries : ', filteredCountries);

    filteredCountries.forEach((country,number) => {
        var ul = document.createElement('p');
        ul.textContent = `ALL Data ${number+1} : ${country.name.common} : ${country.flag} `
        demo.appendChild(ul)
    });
    

};