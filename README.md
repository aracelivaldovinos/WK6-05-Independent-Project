# Currency Exchanger

#### An application that allows users to convert U.S. dollars to another currency using ExchangeRate-API

#### By Araceli Valdovinos

## Technologies Used

* _HTML_
* _CSS/Bootstrap_
* _JavaScript/jQuery_
* _Webpack_
* _Node Package Manager_
* _Exchange Rate API_

## Description
_ A currency exchange application that allows a user to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (Euro, Yen, Australian Dollars, Canada Dollars, Pounds). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API: [ExchangeRate-API] (https://www.exchangerate-api.com/). The application must do the following: _
* _RA user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won._
* _Users should be able to convert U.S. currency into at least 5 other types of currency._
* _If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)_
* _If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)_


## Setup/Installation Requirements

* _Clone the repository to desktop using "git clone" in terminal_
* _Open cloned folder in text editor of your choice_
* _Create an '.env' file in the project root directory_
* _Register for a free API by: Visiting the [ExchangeRate-API] (https://www.exchangerate-api.com/) site . Input your email address and click the "Get Free Key" button._
* _Complete registration for a key then copy and paste API key in the .env file_
* _In the .env file, add the API key in place of  [Your API KEY] in the "API_KEY=[Your API KEY]" template_
* _Add ".env" in the gitignore file in order to hide .env file from the public_
* _Run "npm install" in the terminal or command line to download dependencies_
* _Run "npm run start" in terminal_

## Known Bugs

* _Any known issues_
* _should go here_

## License
_[MIT](https://opensource.org/licenses/MIT) (c) 2021 Araceli Valdovinos_


## Contact Information
_Araceli Valdovinos araceli.valdovinos@outlook.com_