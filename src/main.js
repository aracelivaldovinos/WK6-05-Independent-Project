
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './exchange-currency.js';

$('button#conversionBtn').click(function(){

 
  ExchangeCurrency.getCurrency()
    .then(function(response){ 
      let currency = $('select#countries').val();
      let usDollars = Math.round(parseInt($('input#userInput').val()));
      const key = response['conversion_rates'];
      if (currency in key){
        let newCurrency = (usDollars*(key[currency]));
        $('#output').text((newCurrency.toFixed(2)));
      }
      else {
        $('#output').text("Currency does not exist!");
      }
              
    })
    .catch(function(error){
      $('#output').text(`There was an error: ${error.message}`);   
      console.log(error.message);
    });    
      
});


