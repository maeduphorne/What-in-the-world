// describe('User App Main Page Flows', () => {
//     beforeEach(() => {
//     cy.visit('http://localhost:3000/')
//     })
// });

describe('Main Page Render', () => {
    it('Should have a header with the App\'s name on page load', () => {
        cy.visit('http://localhost:3000/')
        cy.get('h1').contains('What In The World')
    })

    // should display a drop down form of countries on load
    it('Should display a drop down on load & populate the selections with country names', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.country-dropdown').should('be.visible')
    })
    // should be able to select a country and submit the country on button click 
})