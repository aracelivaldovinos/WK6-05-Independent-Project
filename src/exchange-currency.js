export function getCurrency() {
  return (fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`))
    .then(function(response){
      if (!response.ok){
        throw Error(response.status);
      }
      return response.json();
    });  
} 

export function getCountries() {
  return (fetch (`https://restcountries.com/v3.1/all`))
    .then(function(response){
      if (!response.ok){
        throw Error(response.status);
      }
      return response.json();
    });  
}






