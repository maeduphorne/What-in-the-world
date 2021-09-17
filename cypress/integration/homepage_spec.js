describe('Main Page Render', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.FetchData('GET', 'https://restcountries.eu/rest/v2/all')
        });

    it('Should have a header with the App\'s name on page load & an image of a map', () => {
        cy.get('h1').contains('What In The World')
        cy.get('.worldMapImg').should('be.visible')
    })

    it('Should display a drop down menu on load', () => {
        cy.get('.country-dropdown')
            .should('be.visible')
            .should('have.value', '')
            .contains('option')
        })   

    it('Should be able to select any country, should update url to matching path and display country Quiz Page', () => {
        cy.get('.country-dropdown')
            .select('Uzbekistan')
            .get('.dropdown-btn').click()
            .url().should('eq', 'http://localhost:3000/Uzbekistan')
            .url().should('not.eq', 'http://localhost:3000/')
            .get('h1').contains('What In The World')
            .get('h2').contains('Uzbekistan?')
            .get('.answer-input').should('be.visible')
    })
})