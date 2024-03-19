import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('the user fetches the USD price against AED', () => {
    cy.request({
        method: 'GET',
        url: 'https://open.er-api.com/v6/latest/USD',
    }).as('apiResponse');
});

Then('the price should be within the range of {float} to {float}', (minPrice, maxPrice) => {
    cy.get('@apiResponse').should(response => {
        const usdToAedRate = response.body.rates.AED;
        expect(usdToAedRate).to.be.within(minPrice, maxPrice);
    });
});
