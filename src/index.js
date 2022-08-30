import './css/styles.css';
import {searchCountry} from './fetchCountries'
import { debounce } from 'lodash';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

const inputBox = document.querySelector('#search-box');


inputBox.addEventListener('input', debounce(() => {
    searchCountry(inputBox.value)
        .then((value) => { return console.log(value) })
        .catch(() => { return console.log('błont duży prosze inaczyj') });
},DEBOUNCE_DELAY))
console.log(searchCountry(""));