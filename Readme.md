## Providers API

### GET /providers

Example Queries:
https://bain-arubasuuaz.now.sh/providers?max_discharges=100&min_discharges=20&max_average_covered_charges=40000&min_average_covered_charges=20000&min_average_medicare_payments=4000&max_average_medicare_payments=10000&state=AL

https://bain-arubasuuaz.now.sh/providers?min_discharges=25&max_discharges=25&state=GA


Query Params:

| name | type |
|-------|------|
|max_discharges| number |
|min_discharges| number |
|max_average_covered_charges| number |
|min_average_covered_charges| number |
|min_average_medicare_payments| number |
|max_average_medicare_payments| number |
|state| 2 letter string (A-Z) |

Invalid query params will return status code 400 and an error of this format:
```javascript
{
  name: 'ValidationError',
  message: '"min_average_medicare_payments" must be a number'
}

```

### Commands
Start server locally:
```
npm install && npm start
```

Tests:
```
npm run test
```

Deploy:

```
now --public
```
Login is required for deployment

## Implementation Notes
- Test and production databases hosted on mongolab
(normally the test database would be run locally but in case whoever runs this app doesn't have mongo installed having it be remote is easier)
- Testing is done with jest. Fetch is used to make requests to the test server
- The .env file was uploaded in this case so that its easy to run the app
- app.js is its own file so that it can be required in to start the test server and the api server
- Query params validation middleware uses Joi to build the schema
- I turned price strings like "$4592.39" into doubles when I stored them in the database so they are easy to query with less than or greater than operators. This assumes all prices are in USD
- I decided to implement the file structure like I would for a larger app
- I used https://zeit.co/now to deploy because it's even easier to use than Heroku