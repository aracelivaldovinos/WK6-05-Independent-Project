// import Project from './project';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './exchange-currency.js';



function getElement(response) {
  console.log(response);
  console.log(response['conversion_rates']['AED']);
  let EUR = response['conversion_rates']['EUR'];
  console.log(5*EUR)
  // if (response['conversion_rates']) {
  //   $()
  // }

}
$('button#conversionBtn').click(function(){
  let usDollars = parseInt($('input#userInput').val());
  console.log(usDollars);
  ExchangeCurrency.getCurrency()
    .then(function(response){
      getElement(response);
    });
});


