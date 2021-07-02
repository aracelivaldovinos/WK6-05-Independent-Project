export default class ExchangeCurrency {
  static getCurrency() {
    return (fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`))
      .then(function(response){
        console.log(response);
        if (!response.ok){
          throw Error(response.status);
        }
        return response.json();
      });
   
  }
  
}