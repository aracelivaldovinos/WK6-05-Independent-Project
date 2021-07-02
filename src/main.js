// import Project from './project';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './exchange-currency.js';


function getElement(response) {
  console.log(response);
  console.log(response['conversion_rates']);
  // if (response['conversion_rates']) {
  //   $()
  // }

}

ExchangeCurrency.getCurrency()
  .then(function(response){
    getElement(response);
  });

