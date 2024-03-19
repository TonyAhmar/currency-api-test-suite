import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the API is accessible', () => {
    // No action required, Cypress automatically handles this
});

When('the user makes a request to the API', () => {
    cy.request({
        method: 'GET',
        url: 'https://open.er-api.com/v6/latest/USD',
    }).as('apiResponse');
});

Then('the API call should be successful', () => {
    cy.get('@apiResponse').should(response => {
        expect(response.status).to.eq(200);
    });
});

Then('the response status code should be {int}', statusCode => {
    cy.get('@apiResponse').should(response => {
        expect(response.status).to.eq(statusCode);
    });
});

Then('the response status should be SUCCESS', () => {
    cy.get('@apiResponse').should(response => {
        // Assert that the response status is 200
        expect(response.status).to.eq(200);

        // Assert that the response result is 'success'
        expect(response.body.result).to.eq('success');
    });
});

Then('the returned price should be valid', () => {
    cy.get('@apiResponse').should(response => {
        // Assuming the response contains the price under 'rates' field
        const price = response.body.rates.USD; // Assuming USD is the currency for which we are checking the price
        //checking if the price is within a specific range and greater than 0
        expect(price).to.be.greaterThan(0.0);
        expect(price).to.be.lessThan(10000.0); // Assuming the price won't exceed 10000 USD
    });
});
