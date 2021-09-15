// describe('User App Main Page Flows', () => {
//     beforeEach(() => {
//     cy.visit('http://localhost:3000/')
//     })
// });

describe('Main Page Render', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        });

    it('Should have a header with the App\'s name on page load & an image of a map', () => {
        cy.get('h1').contains('What In The World')
        cy.get('.worldMapImg').should('be.visible')
    })

    // should display a drop down form of countries on load
    it('Should display a drop down menu on load', () => {
        cy.get('.country-dropdown')
            .should('be.visible')
            .should('have.value', '')
            .contains('option')
            
            // .should()
        })
        
    // should be able to select a country and submit the country on button click 
    it('Should be able to select a country', () => {
        cy.get('.country-dropdown')
            .select('Uzbekistan')
            .should('be.visible')
            // .click('country-submit')
            // .should('have.value', 'Uzbekistan')

    })
})