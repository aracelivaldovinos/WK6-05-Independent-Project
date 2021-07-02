// import Project from './project';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './exchange-currency.js';


// function getElement(response) {
//   console.log(response);
//   let EUR = response['conversion_rates']['EUR'];
//   console.log(5*EUR)
//   // if (response['conversion_rates']) {
//   //   $()
//   // }

// }
$('button#conversionBtn').click(function(){
  let usDollars = parseInt($('input#userInput').val());
  // console.log(usDollars);
  ExchangeCurrency.getCurrency()
    .then(function(response){
      if ($('select#countries').val() === "EUR") {
        $('#output').text(usDollars * `${response['conversion_rates']['EUR']}`);
      }else if ($('select#countries').val() === "JPY"){
        $('#output').text(usDollars * `${response['conversion_rates']['JPY']}`);
      }else if ($('select#countries').val() === "GBP"){
        $('#output').text(usDollars * `${response['conversion_rates']['GBP']}`);
      }else if ($('select#countries').val() === "AUD"){
        $('#output').text(usDollars * `${response['conversion_rates']['AUD']}`);
      }else {
        $('#output').text(usDollars * `${response['conversion_rates']['CAD']}`);
      }
      
      // getElement(response);
    });
});


