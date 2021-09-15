// describe('User App Main Page Flows', () => {
//     beforeEach(() => {
//     cy.visit('http://localhost:3000/')
//     })
// });

describe('Main Page Render', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        });

    it('Should have a header with the App\'s name on page load', () => {
        cy.get('h1').contains('What In The World')
    })

    // should display a drop down form of countries on load
    it('Should display a drop down on load & populate the selections with country names', () => {
        cy.get('.country-dropdown').should('be.visible')
        .select('Uzbekistan').should('be.visible')
    })
    // should be able to select a country and submit the country on button click 
})