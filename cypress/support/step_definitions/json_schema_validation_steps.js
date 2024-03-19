import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import Ajv from 'ajv';

// Define the JSON schema
const schema = {
    type: 'object',
    properties: {
        result: { type: 'string' },
        provider: { type: 'string' },
        documentation: { type: 'string' },
        terms_of_use: { type: 'string' },
        time_last_update_unix: { type: 'number' },
        time_last_update_utc: { type: 'string' },
        time_next_update_unix: { type: 'number' },
        time_next_update_utc: { type: 'string' },
        time_eol_unix: { type: 'number' },
        base_code: { type: 'string' },
        rates: { type: 'object' },
    },
    required: ['result', 'provider', 'documentation', 'terms_of_use', 'time_last_update_unix', 'time_last_update_utc', 'time_next_update_unix', 'time_next_update_utc', 'time_eol_unix', 'base_code', 'rates'],
};

// Create an instance of Ajv validator
const ajv = new Ajv();

When('the user makes a request to the API', () => {
    cy.request({
        method: 'GET',
        url: 'https://open.er-api.com/v6/latest/USD',
    }).as('apiResponse');
});

Then('the response should match the JSON schema', () => {
    cy.get('@apiResponse').then(response => {
        // Validate the response against the JSON schema
        const validate = ajv.compile(schema);
        const isValid = validate(response.body);
        expect(isValid).to.be.true;
    });
});
