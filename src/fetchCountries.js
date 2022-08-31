import Notiflix from 'notiflix';

export let fetchCountries = name => {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (response.status==404) {
        throw new Error(Notiflix.Notify.failure("Oops, there is no country with that name!"));
      }
    
      let countries = response.json()
      return countries;
    })
  .catch()
  }
