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
        })
        
    // should be able to select a country and submit the country on button click 
    it('Should be able to select a country', () => {
        cy.get('.country-dropdown')
            .select('Uzbekistan')
            .should('be.visible')
    })

    it('Should be able to select a country, should update url to matching path and display country Quiz Page', () => {
        cy.get('.country-dropdown')
            .select('Uzbekistan')
            .get('.country-submit').click()
            .url().should('eq', 'http://localhost:3000/Uzbekistan')
            .url().should('not.eq', 'http://localhost:3000/')
            .get('h1').contains('What In The World')
            .get('h2').contains('Uzbekistan')
            .get('.answer-input').should('be.visible')
    })
})