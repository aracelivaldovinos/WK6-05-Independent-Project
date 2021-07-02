// import Project from './project';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './exchange-currency.js';

// function convertion(response) {

// }

function getElement(response) {
  console.log(response);
  console.log(response['conversion_rates']['AED']);
  let EUR = response['conversion_rates']['EUR'];
  console.log(5*EUR)
  // if (response['conversion_rates']) {
  //   $()
  // }

}

// let usDollars = 5;
ExchangeCurrency.getCurrency()
  .then(function(response){
    getElement(response);
  });

