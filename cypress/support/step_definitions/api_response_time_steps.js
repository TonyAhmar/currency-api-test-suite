When('the user makes a request to the API', () => {
    cy.request({
        method: 'GET',
        url: 'https://open.er-api.com/v6/latest/USD',
    }).as('apiResponse');
});

Then('the response time should be less than {int} seconds', (maxResponseTimeSeconds) => {
    cy.get('@apiResponse').then(response => {
        console.log('Response Headers:', response.headers);

        // Extract the time from the response date string
        const responseDateString = response.headers.date;
        const responseTime = new Date(responseDateString).getTime();
        console.log('Response Time:', responseTime);

        // Record the current time before making the API call
        const currentTime = new Date().getTime();
        console.log('Current Time:', currentTime);

        // Calculate the difference in seconds
        const responseTimeSeconds = (currentTime - responseTime) / 1000;
        console.log('Response Time (s):', responseTimeSeconds);

        // Assert that the response time is less than the specified maximum response time
        expect(responseTimeSeconds).to.be.lessThan(maxResponseTimeSeconds);
    });
});
