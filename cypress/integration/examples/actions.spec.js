describe('Actions Test Suite', () => {
  beforeEach(() => {
    cy.visit('/'); // Visit the base URL defined in cypress.config.js
  });

  it('should perform a click action', () => {
    cy.get('button#click-me').click(); // Adjust the selector as needed
    cy.get('div#result').should('contain', 'Button clicked!'); // Adjust the expected result
  });

  it('should fill out a form', () => {
    cy.get('input#name').type('John Doe'); // Adjust the selector as needed
    cy.get('form').submit();
    cy.get('div#confirmation').should('contain', 'Thank you, John Doe!'); // Adjust the expected result
  });

  it('should check a checkbox', () => {
    cy.get('input#subscribe').check(); // Adjust the selector as needed
    cy.get('input#subscribe').should('be.checked');
  });

  it('should select an option from a dropdown', () => {
    cy.get('select#options').select('Option 1'); // Adjust the selector and option as needed
    cy.get('div#selected-option').should('contain', 'You selected: Option 1'); // Adjust the expected result
  });
});