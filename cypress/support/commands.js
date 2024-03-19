import Ajv from 'ajv';

const ajv = new Ajv();

Cypress.Commands.add('validateSchema', (responseBody, schema) => {
    const validate = ajv.compile(schema);
    const isValid = validate(responseBody);
    expect(isValid, 'Response matches JSON schema').to.be.true;
});
