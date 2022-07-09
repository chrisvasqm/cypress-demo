describe('Automation Practice Tests', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Can load the page', () => {
    cy.visit('https://demoqa.com/elements')
    cy.get('span').contains('Text Box').click()
    cy.get('#userName').type('John Doe')
    cy.get('#userEmail').type("john.doe@gmail.com")
    cy.get('#currentAddress').type('5th street')
    cy.get('#permanentAddress').type('4th street')
    cy.get('#submit').click()

    cy.get('p[id="name"]').should('have.text', 'Name:John Doe')
    cy.get('p[id="email"]').should('have.text', 'Email:john.doe@gmail.com')
    cy.get('p[id="currentAddress"]').should('have.text', 'Current Address :5th street ')
    cy.get('p[id="permanentAddress"]').should('have.text', 'Permananet Address :4th street')
  })
})