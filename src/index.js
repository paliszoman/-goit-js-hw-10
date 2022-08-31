import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { renderCountries } from './renderList';
import { debounce }  from 'lodash';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

const inputBox = document.querySelector('input#search-box');

inputBox.addEventListener('input', debounce((event) => {
  fetchCountries(inputBox.value.trim())
    .then((value) => { return renderCountries(value); })
    .catch((err) => { return console.log(err) })
}, DEBOUNCE_DELAY));

