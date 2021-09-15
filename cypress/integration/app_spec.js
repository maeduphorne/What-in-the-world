describe('User App Main Page Flows', () => {
    beforeEach(() => {
    cy.intercept()
    .visit('http://localhost:3000/')
  });