## Providers API

### GET /providers
GET /providers?max_discharges=5&min_discharges=6&max_average_covered_charges=50000&min_average_covered_charges=40000&min_average_medicare_payments=6000&max_average_medicare_payments=10000&state=GA

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

Start server locally:
```
npm install && npm start
```

Tests:
```
npm run test
```

## Implementation Notes
- Test and Production databases hosted on mongolab
(normally the test database would be run locally but in case whoever runs this app doesn't have mongo installed having it be remote is easier)
- Testing is done with jest. Fetch is used to make requests to the test server
- The .env file was uploaded in this case so that its easy to run the app and connect to the db. The TEST_PORT is used by the test server
- app.js is its own file so that it can be required in to start the test server and the api server
- Query params validation middleware uses Joi to build the schema
