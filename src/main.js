// import Project from './project';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

console.log(fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`))
 .then(function(response){
  console.log(response);
  if (!response.ok){
    throw Error(response.statusText);
  }
  console.log(response.json());
})
.catch(function(error){
  return error;
});


