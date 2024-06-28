# Coding Challenge - # Let's grab a drink API

## Introduction
This API Rest project runs on ```NodeJs``` with the ```express``` library.

The goal is to provide both a list of products (beer) as well as the detail view of a particular beer, formatting as well its price.

## Prerequisites
 - [NodeJs](https://nodejs.org/)
 - [NPM](https://www.npmjs.com/)

## How to run the project

### Install dependencies
Run on a terminal:
- ```npm install```
- ```npm run postinstall```
-
### Starting the server - Dev Mode (with hot reload)
Run on a terminal:
- ```npm run dev```

### Starting the server - Regular Mode (without hot reload, useful to test price updates)
Run on a terminal:
- ```npm run start```

You are now ready to go!

## Testing the app
 - Run on a terminal:
```npm test```

## Approach decisions
Since this is a frontend challenge I didn't add a database, just mocked the database with simple jsons (respecting the original structure). In case a database was implemented I would've done it using repository pattern but since this is a mock it felt a bit overkill, so just called the mocks directly from the services.

Modeled the domain as classes, even thought they don't have a lot of logic nor behaivour, however I built it this way to make it future proof, if we wanted to extend its functionality it is already designed to be extensible.

Added the *helmet* express middleware but overrided cors, just to make sure you don't run into any config issues when running this locally, if this were to be hosted of course a proper cors configuration + should be put in place before it could be released.

Additionally added two endpoints to retrieve product thumbnails and detail images, which will be consumed from the frontend to obtain those resources.

## API REST Documentation

### Vehicles
| Operation                    | Request                                                 | Response Status | Response Description                                                   |
|------------------------------|---------------------------------------------------------|-----------------|------------------------------------------------------------------------|
| Retrieve all products       | ```GET /api/product/8```                                   | 200 OK          | A *product thumbnail* which has the minimum required information to be displayed in the list, and the price of the first valid sku                     |
| Retrieve a preoduct detail by code | ```GET /api/stock-price/8```                                 | 200 OK   | A *product detail* which has all the details of a given product, with the list of each price by sku                            |
|                              | ```GET /api/stock-price/9999```                                 | 404 Not Found   | There is not a beer with the code ```9999```|
|                              | ```GET /api/stock-price/asd```                                  | 400 Bad Request | The code format is invalid |

## Author
Andrés Esteban Suárez
