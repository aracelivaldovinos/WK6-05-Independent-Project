import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import  {getCurrency, getCountries} from './exchange-currency.js';

getCountries()
  .then(function(response){
    console.log(response);
    response.map((item)=>{
      console.log(item.name.common, item.cca3, item.flag);
      $("#countries1").append(`<option value=${item.name.common}>${item.name.common} ${item.cca3} ${item.flag}</option>`);
      $("#countries2").append(`<option value=${item.name.common}>${item.name.common} ${item.cca3} ${item.flag}</option>`);
    });
  })
  .catch(function(error){   
    console.log(error.message);
  });

getCurrency()
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){   
    console.log(error.message);
  }); 
  


$('button').click(function(){
  event.preventDefault();
  // getCurrency()
  //   .then(function(response){
  //     console.log(response);
  //   })
  //   .catch(function(error){   
  //     console.log(error.message);
  //   }); 

    
  // getCountries()
  //   .then(function(response){
  //     console.log(response);
  //     response.map((item)=>{
  //       $("#countries").append(`<option value=${item.name.common}>${item.name.common}</option>`)
  //       console.log(item.name.common);
  //     });
  //   })
  //   .catch(function(error){   
  //     console.log(error.message);
  //   }); 
  




  
  // getCountries();
    // .then(function(response){
    //   console.log(response);
    // })
    // .catch(function(error){
    //   $('#output').text(`There was an error: ${error.message}`);   
    //   console.log(error.message);
    // }); 

  //   getCurrency()
  //     .then(function(response){ 
  //       console.log(response);
  //       let currency = $('select#countries').val();
  //       let usDollars = Math.round(parseInt($('input#userInput').val()));
  //       const key = response['conversion_rates'];
  //       if (currency in key){
  //         let newCurrency = (usDollars*(key[currency]));
  //         $('#output').text((newCurrency.toFixed(2)));
  //       }
  //       else {
  //         $('#output').text("Currency does not exist!");
  //       }
              
  //     })
  //     .catch(function(error){   
  //       console.log(error.message);
  //     }); 
    
  // async function makeApiCall() {
  //   const response = await getCountries();
  //   console.log(response); 
  // }

  // makeApiCall()
        
});