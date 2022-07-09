describe('Automation Practice Tests', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Can load the page', () => {
    cy.visit('https://demoqa.com/elements')
  })
})