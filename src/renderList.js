import Notiflix from 'notiflix';

const countryList = document.querySelector('ul.country-list');

export let renderCountries = (countries) => {
  const markup = countries
    .map((country) => {
      return `<li class="country-element" style="list-style='none';display: flex; align-items: center; padding-bottom: 8px">
      <img src="${country.flags.svg}"
      width="20" style="display: inline-block" />
      <span class="country-span" style="padding-left: 5px; font-weight: 500; font-size: 18px">${country.name.official}</span></li>`;
    })
    .join('');
  if (countries.length > 10) {
    countryList.innerHTML = "",
      Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
  }
  if (countries.length < 10 && countries.length > 2) { countryList.innerHTML = markup }
  if (countries.length == 1) { return mainCountry(countries); }
}

let mainCountry = (countries) => {
     countries
       .map((country) => {
          return countryList.innerHTML = `<li class="country-element" style="list-style='none';display: flex; align-items: center;">
          <img src="${country.flags.svg}"
      width="70" style="display: inline-block" />
      <span class="country-span" style="padding-left: 20px; font-size: 65px; height:100%">${country.name.official}</span></li>
      <br><li style="list-style:none;"><span style="padding-right: 41px; font-weight: 700;">Capital: </span>${country.capital}</li>
      <li style="list-style:none;"><span style="padding-right: 10px; font-weight: 700;">Population: </span>${country.population}</li>
      <li style="list-style:none;"><span style="padding-right: 12px; font-weight: 700;">Languages: </span>${Object.values(country.languages).join(', ')}</li>`;
        })
        .join('');
    }
  