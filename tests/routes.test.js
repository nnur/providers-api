const fetch = require('isomorphic-fetch');
const testServer = require('./testServer');

const baseURL = `http://localhost:${process.env.TEST_PORT}`;

describe('/providers', () => {

  beforeAll(testServer.start);
  afterAll(testServer.stop);

  describe('query params formatting', () => {

    it('should return 200 with no query params', () => {
      return expect(fetch(`${baseURL}/providers`).then(data => data.status))
        .resolves
        .toEqual(200);
    });

    it('should return 400 with wrong query params', () => {
      return expect(fetch(`${baseURL}/providers?lemmonade=harlem`).then(data => data.status))
        .resolves
        .toEqual(400);
    });

    it('should return an error with wrong query param', () => {
      return expect(fetch(`${baseURL}/providers?lemmonade=harlem`).then(data => data.json()))
        .resolves
        .toEqual({
          name: 'ValidationError',
          message: '"lemmonade" is not allowed'
        })
    });

    it('should return an error if the query param "max_discharges" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?max_discharges=imastring`).then(data => data.json()))
        .resolves
        .toEqual({
          name: 'ValidationError',
          message: '"max_discharges" must be a number'
        });
    });

    it('should return 400 if the query param "max_discharges" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?max_discharges=imastring`).then(data => data.status))
        .resolves
        .toEqual(400);
    });

    it('should return 200 if the query param "max_discharges" is a number', () => {
      return expect(fetch(`${baseURL}/providers?max_discharges=3000`).then(data => data.status))
        .resolves
        .toEqual(200);
    });

    it('should return an error if the query param "min_discharges" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?min_discharges=imastring`).then(data => data.json()))
        .resolves
        .toEqual({
          name: 'ValidationError',
          message: '"min_discharges" must be a number'
        });
    });

    it('should return 400 if the query param "min_discharges" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?min_discharges=imastring`).then(data => data.status))
        .resolves
        .toEqual(400);
    });

    it('should return 200 if the query param "min_discharges" is a number', () => {
      return expect(fetch(`${baseURL}/providers?min_discharges=3000`).then(data => data.status))
        .resolves
        .toEqual(200);
    });

    it('should return an error if the query param "max_average_covered_charges" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?max_average_covered_charges=imastring`).then(data => data.json()))
        .resolves
        .toEqual({
          name: 'ValidationError',
          message: '"max_average_covered_charges" must be a number'
        });
    });

    it('should return 400 if the query param "max_average_covered_charges" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?max_average_covered_charges=imastring`).then(data => data.status))
        .resolves
        .toEqual(400);
    });

    it('should return 200 if the query param "max_average_covered_charges" is a number', () => {
      return expect(fetch(`${baseURL}/providers?max_average_covered_charges=3000`).then(data => data.status))
        .resolves
        .toEqual(200);
    });

    it('should return an error if the query param "min_average_covered_charges" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?min_average_covered_charges=imastring`).then(data => data.json()))
        .resolves
        .toEqual({
          name: 'ValidationError',
          message: '"min_average_covered_charges" must be a number'
        });
    });

    it('should return 400 if the query param "min_average_covered_charges" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?min_average_covered_charges=imastring`).then(data => data.status))
        .resolves
        .toEqual(400);
    });

    it('should return 200 if the query param "min_average_covered_charges" is a number', () => {
      return expect(fetch(`${baseURL}/providers?min_average_covered_charges=3000`).then(data => data.status))
        .resolves
        .toEqual(200);
    });

    it('should return an error if the query param "max_average_medicare_payments" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?max_average_medicare_payments=imastring`).then(data => data.json()))
        .resolves
        .toEqual({
          name: 'ValidationError',
          message: '"max_average_medicare_payments" must be a number'
        });
    });

    it('should return 400 if the query param "max_average_medicare_payments" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?max_average_medicare_payments=imastring`).then(data => data.status))
        .resolves
        .toEqual(400);
    });

    it('should return 200 if the query param "max_average_medicare_payments" is a number', () => {
      return expect(fetch(`${baseURL}/providers?max_average_medicare_payments=3000`).then(data => data.status))
        .resolves
        .toEqual(200);
    });

    it('should return an error if the query param "min_average_medicare_payments" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?min_average_medicare_payments=imastring`).then(data => data.json()))
        .resolves
        .toEqual({
          name: 'ValidationError',
          message: '"min_average_medicare_payments" must be a number'
        });
    });

    it('should return 400 if the query param "min_average_medicare_payments" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?min_average_medicare_payments=imastring`).then(data => data.status))
        .resolves
        .toEqual(400);
    });

    it('should return 200 if the query param "min_average_medicare_payments" is a number', () => {
      return expect(fetch(`${baseURL}/providers?min_average_medicare_payments=3000`).then(data => data.status))
        .resolves
        .toEqual(200);
    });

    it('should return an error if the query param "state" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?state=alabama`).then(data => data.json()))
        .resolves
        .toEqual({
          name: 'ValidationError',
          message: '"state" length must be 2 characters long'
        });
    });

    it('should return 400 if the query param "state" is of the wrong type', () => {
      return expect(fetch(`${baseURL}/providers?state=12`).then(data => data.status))
        .resolves
        .toEqual(400);
    });

    it('should return 200 if the query param "state" is a two letter string', () => {
      return expect(fetch(`${baseURL}/providers?state=GA`).then(data => data.status))
        .resolves
        .toEqual(200);
    });

    it('should return 200 if all query params are valid', () => {
      return expect(fetch(`${baseURL}/providers?max_discharges=5&min_discharges=6&max_average_covered_charges=50000&min_average_covered_charges=40000&min_average_medicare_payments=6000&max_average_medicare_payments=10000&state=GA`).then(data => data.status))
        .resolves
        .toEqual(200);
    });

  });

  describe('correct response from /providers', () => {
    beforeEach(() => {
      const list = [
        {
          "Provider Name": "SOUTHEAST ALABAMA MEDICAL CENTER",
          "Provider Street Address": "1108 ROSS CLARK CIRCLE",
          "Provider City": "DOTHAN",
          "Provider State": "AL",
          "Provider Zip Code": "36301",	
          "Hospital Referral Region Description": "AL - Dothan",
          "Total Discharges": 91,
          "Average Covered Charges": 32963.07, 
          "Average Total Payments": 	5777.24,
          "Average Medicare Payments": 4763.73
        },
        {
          "Provider Name": "MARSHALL MEDICAL CENTER SOUTH",
          "Provider Street Address": "2505 U S HIGHWAY 431 NORTH",
          "Provider City": "BOAZ",
          "Provider State": "AL",
          "Provider Zip Code": "35957",	
          "Hospital Referral Region Description": "AL - Birmingham",
          "Total Discharges": 14,
          "Average Covered Charges": 22000.07, 
          "Average Total Payments": 	5777.24,
          "Average Medicare Payments": 4763.73
        },
        {
          "Provider Name":"SHARP CHULA VISTA MEDICAL CENTER",
          "Provider Street Address":"751 MEDICAL CENTER COURT",
          "Provider City":"CHULA VISTA",
          "Provider State":"CA",
          "Provider Zip Code":91911,
          "Hospital Referral Region Description":"CA - San Diego",
          "Total Discharges":13,
          "Average Covered Charges":50000,
          "Average Total Payments":8104.38,
          "Average Medicare Payments":7410.23
        },
        {
          "Provider Name":"PEACHES MEDICAL CENTER",
          "Provider Street Address":"751 PEACHES CENTER COURT",
          "Provider City":"Peaches",
          "Provider State":"GA",
          "Provider Zip Code":61011,
          "Hospital Referral Region Description":"GA - Peaches",
          "Total Discharges":70,
          "Average Covered Charges":15232.69,
          "Average Total Payments":2104.38,
          "Average Medicare Payments":410.23
        },
      ]
      return testServer.addToDb(list);
    });

    afterEach(testServer.dropDb);

    it('should return providers with total discharges less than or equal to 14', () => {
      return fetch(`${baseURL}/providers?max_discharges=14`)
        .then(data => data.json())
        .then(results => {
          results.forEach(result => {
            expect(result['Total Discharges']).toBeLessThanOrEqual(14);
          });
          expect(results.length).toBe(2);
        })
    });

    it('should return providers with total discharges less than or equal to 14 in the state CA', () => {
      return fetch(`${baseURL}/providers?max_discharges=14&state=CA`)
        .then(data => data.json())
        .then(results => {
          results.forEach(result => {
            expect(result['Total Discharges']).toBeLessThanOrEqual(14);
            expect(result['Provider State']).toEqual('CA');
          });
          expect(results.length).toBe(1);
        })
    });

    it('should return providers with total discharges greater than or equal to 70 in the state AL', () => {
      return fetch(`${baseURL}/providers?min_discharges=70&state=AL`)
        .then(data => data.json())
        .then(results => {
          results.forEach(result => {
            expect(result['Total Discharges']).toBeGreaterThanOrEqual(70);
            expect(result['Provider State']).toEqual('AL');
          });
          expect(results.length).toBe(1);
        });
    });

    it('should return providers with total discharges greater than or equal to 14 and less than or equal to 80', () => {
      return fetch(`${baseURL}/providers?min_discharges=14&max_discharges=80`)
        .then(data => data.json())
        .then(results => {
          results.forEach(result => {
            expect(result['Total Discharges']).toBeGreaterThanOrEqual(14);
            expect(result['Total Discharges']).toBeLessThanOrEqual(80);
          });
          expect(results.length).toBe(2);
        });
    });

    it('should return 0 providers with total discharges greater than or equal to 80 and less than or equal to 14', () => {
      return fetch(`${baseURL}/providers?min_discharges=80&max_discharges=14`)
        .then(data => data.json())
        .then(results => {
          expect(results.length).toBe(0);
        });
    });

    it('should return 4 providers', () => {
      return fetch(`${baseURL}/providers`)
        .then(data => data.json())
        .then(results => {
          expect(results.length).toBe(4);
        });
    });

    it('should return providers with max_average_covered_charges of 24000', () => {
      return fetch(`${baseURL}/providers?max_average_covered_charges=24000`)
        .then(data => data.json())
        .then(results => {
          results.forEach(result => {
            expect(result['Average Covered Charges']).toBeLessThanOrEqual(24000);
          });
          expect(results.length).toBe(2);
        });
    });

    it('should return providers with max_average_covered_charges of 24000', () => {
      return fetch(`${baseURL}/providers?min_average_covered_charges=24000`)
        .then(data => data.json())
        .then(results => {
          results.forEach(result => {
            expect(result['Average Covered Charges']).toBeGreaterThanOrEqual(24000);
          });
          expect(results.length).toBe(2);
        });
    });

    it('should return providers with min_average_medicare_payments of 5300', () => {
      return fetch(`${baseURL}/providers?min_average_medicare_payments=5300`)
        .then(data => data.json())
        .then(results => {
          results.forEach(result => {
            expect(result['Average Medicare Payments']).toBeGreaterThanOrEqual(5300);
          });
          expect(results.length).toBe(1);
        });
    });

    it('should return providers with max_average_medicare_payments of 500', () => {
      return fetch(`${baseURL}/providers?max_average_medicare_payments=500`)
        .then(data => data.json())
        .then(results => {
          results.forEach(result => {
            expect(result['Average Medicare Payments']).toBeLessThanOrEqual(500);
          });
          expect(results.length).toBe(1);
        });
    });

    it('should return providers with max_average_medicare_payments of 500', () => {
      return fetch(`${baseURL}/providers?max_discharges=100&min_discharges=20&max_average_covered_charges=40000&min_average_covered_charges=20000&min_average_medicare_payments=4000&max_average_medicare_payments=10000&state=AL`)
        .then(data => data.json())
        .then(results => {
          results.forEach(result => {
            expect(result['Total Discharges']).toBeLessThanOrEqual(100);
            expect(result['Total Discharges']).toBeGreaterThanOrEqual(20);
            expect(result['Average Covered Charges']).toBeLessThanOrEqual(40000);
            expect(result['Average Covered Charges']).toBeGreaterThanOrEqual(20000);
            expect(result['Average Medicare Payments']).toBeGreaterThanOrEqual(4000);
            expect(result['Average Medicare Payments']).toBeLessThanOrEqual(10000);
          });
          expect(results.length).toBe(1);
        });
    });

  });

});