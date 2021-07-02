
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './exchange-currency.js';

$('button#conversionBtn').click(function(){

  function getElement(response,) {
    let usDollars = Math.round(parseInt($('input#userInput').val()));
    let currency = $('select#countries').val();
    const conversion_rates = Object.keys(response['conversion_rates']);
    if ($('select#countries').val() === "EUR") {
      $('#sign').text("€");
      $('#output').text(((usDollars * `${response['conversion_rates']['EUR']}`).toFixed(2)));
    }else if ($('select#countries').val() === "JPY"){
      $('#sign').text("¥");
      $('#output').text((usDollars * `${response['conversion_rates']['JPY']}`).toFixed(2));
    }else if ($('select#countries').val() === "GBP"){
      $('#sign').text("£");
      $('#output').text((usDollars * `${response['conversion_rates']['GBP']}`).toFixed(2));
    }else if ($('select#countries').val() === "AUD"){
      $('#sign').text("AU$");
      $('#output').text((usDollars * `${response['conversion_rates']['AUD']}`).toFixed(2));
    }else if ($('select#countries').val() === "CAD"){
      $('#sign').text("CA$");
      $('#output').text((usDollars * `${response['conversion_rates']['CAD']}`).toFixed(2));
    }else {
      conversion_rates.forEach(function(element){
        if (currency !== element) {
          console.log(currency);
          console.log(element);
          $("#output").text("Currency does not exist!"); 
        }  
      });     
    }
  }
  ExchangeCurrency.getCurrency()
    .then(function(response){ 
      getElement(response);          
    })
    .catch(function(error){
      $('#output').text(`There was an error: ${error.message}`);   
      console.log(error.message);
    });    
      
});


