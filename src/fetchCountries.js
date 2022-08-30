import Notiflix from 'notiflix';

const searchCountry = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
    if (!response.ok) {
      throw new Error(Notiflix.Notify.failure("Oops, there is no country with that name!"));
    }
    return response.json();
  })
        .catch(err => console.log(err))
  };


const renderCountries = (countriesArray) => {
    const countries = countriesArray
        .map(country => {
            return `<li>${country.flags.svg}${country.name}</li>`})
.join("")
  document.querySelector('.country-list').append.innerHTML = countries;
}

export { searchCountry };