const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    //     for (const country of countries) {
    //         console.log(country);
    //     }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country);
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        countriesDiv.appendChild(h3)
    })
}