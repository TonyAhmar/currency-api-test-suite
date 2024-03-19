import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('the user fetches the list of currency pairs', () => {
    cy.request({
        method: 'GET',
        url: 'https://open.er-api.com/v6/latest/USD',
    }).as('apiResponse');
});

Then('the response should contain {int} currency pairs', expectedPairsCount => {
    cy.get('@apiResponse').should(response => {
        const currencyPairsCount = Object.keys(response.body.rates).length;
        expect(currencyPairsCount).to.eq(expectedPairsCount);
    });
});
