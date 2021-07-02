// import Project from './project';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './exchange-currency.js';

$('button#conversionBtn').click(function(){

function getElement(response,) {
  let usDollars = parseInt($('input#userInput').val());
if ($('select#countries').val() === "EUR") {
        $('#output').text((usDollars * `${response['conversion_rates']['EUR']}`).toFixed(2));
      }else if ($('select#countries').val() === "JPY"){
        $('#output').text((usDollars * `${response['conversion_rates']['JPY']}`).toFixed(2));
      }else if ($('select#countries').val() === "GBP"){
        $('#output').text((usDollars * `${response['conversion_rates']['GBP']}`).toFixed(2));
      }else if ($('select#countries').val() === "AUD"){
        $('#output').text((usDollars * `${response['conversion_rates']['AUD']}`).toFixed(2));
      }else {
        $('#output').text((usDollars * `${response['conversion_rates']['CAD']}`).toFixed(2));
      }

}
// $('button#conversionBtn').click(function(){
//   let usDollars = parseInt($('input#userInput').val());
  ExchangeCurrency.getCurrency()
    .then(function(response){
      // if ($('select#countries').val() === "EUR") {
      //   $('#output').text((usDollars * `${response['conversion_rates']['EUR']}`).toFixed(2));
      // }else if ($('select#countries').val() === "JPY"){
      //   $('#output').text((usDollars * `${response['conversion_rates']['JPY']}`).toFixed(2));
      // }else if ($('select#countries').val() === "GBP"){
      //   $('#output').text((usDollars * `${response['conversion_rates']['GBP']}`).toFixed(2));
      // }else if ($('select#countries').val() === "AUD"){
      //   $('#output').text((usDollars * `${response['conversion_rates']['AUD']}`).toFixed(2));
      // }else {
      //   $('#output').text((usDollars * `${response['conversion_rates']['CAD']}`).toFixed(2));
      // }
      
      getElement(response);
    });
});


