import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import  {getCurrency, getCountries} from './exchange-currency.js';


getCountries()
  .then(function(response){
    let data = response.filter((item) =>{
      return item.currencies !== undefined;
    });

    let us = response.filter((item)=>{
      return item.name.common === 'United States';
    });

    data.map((item)=>{
      let currency = Object.keys(item.currencies);
      $("#countries2").append(`<option value=${currency[0]}>${item.name.common} ${currency[0]} ${item.flag}</option>`); 
    });

    us.map((item) => {
      let currency = Object.keys(item.currencies);
      $("#countries1").append(`<option value=${currency[0]}>${item.name.common} ${currency[0]} ${item.flag}</option>`);
    });


  })
  .catch(function(error){   
    $(".invalidItems").append(`<div class='invalidInput'><p>${error}</p></div>`);
  });


$('button').click(function(){
  event.preventDefault();

  let userInput1 = $("#userInput1").val();
  let number1 = parseInt(userInput1);
  let userSelection2 = $('#countries2').val();

  getCurrency()
    .then(function(response){
      if(typeof number1 === 'number' && number1 >= 0){
        if(userSelection2 in response.conversion_rates){
          let conversion = number1 * response.conversion_rates[userSelection2];
          $("#input").empty();
          $("#input").append(`<input class="form-control" type="text" name="userInput2" id="userInput2" placeholder=${conversion} disabled>`);
        }
        else{
          $(".invalidItems").append("<div class='invalidInput'><p>Currency in question doesn't exist.</p></div>");
        }
      }else{
        console.log("not a number");
        $(".invalidItems").append("<div class='invalidInput'><p>Enter a positive number.</p></div>");
      }
    })
    .catch(function(error){  
      // console.log(error);
      $(".invalidItems").append(`<div class='invalidInput'><p>${error}</p></div>`);
    }); 
    
  $(".invalidInput").empty();
});