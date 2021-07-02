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

  ExchangeCurrency.getCurrency()
    .then(function(response){ 
      let currency = $('select#countries').val();
      const conversion_rates = Object.keys(response['conversion_rates']);
      conversion_rates.forEach(function(element){
        if (currency === element) {
          console.log(currency)
          console.log(element)
          $('#output').text("Currency does not exist");
        }else {
          getElement(response);
        }


      })
     
      for(let i=0; i <= conversion_rates.length; i++){
        if (currency === conversion_rates[i]) {
          getElement(response);
          return true
          

        }else {
          return false
          // $('#output').text("Currency in question does not exist");
        }
      }    
    })
    .catch(function(error){
      $('#output').text(`There was an error: ${error.message}`);   
      console.log(error.message);
      // console.log(error);
    }); 
});


