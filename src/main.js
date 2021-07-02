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
    }else if ($('select#countries').val() === "CAD"){
      $('#output').text((usDollars * `${response['conversion_rates']['CAD']}`).toFixed(2));
    }else {
      let currency = $('select#countries').val();
      const conversion_rates = Object.keys(response['conversion_rates']);
      conversion_rates.forEach(function(element){
        if (currency !== element) {
          console.log(currency)
          console.log(element)
          $("#output").text("Currency does not exist!"); 
        } 
           
          
          

      });  
      
    }
  }

  ExchangeCurrency.getCurrency()
    .then(function(response){ 
      // let currency = $('select#countries').val();
      // const conversion_rates = Object.keys(response['conversion_rates']);
      getElement(response); 
          
    })
    
    .catch(function(error1){
      $('#output').text(`There was an error: ${error1.message}`);   
      console.log(error1.message);
      // console.log(error);
    }); 
});


