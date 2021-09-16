describe('Quiz Page User Flow', () => {
    beforeEach(() => {
        it('Should select a sountry and move to that country\'s quiz page', () => {
            cy.get('.country-dropdown')
                .select('Uzbekistan')
                .get('.dropdown-btn').click()
                .url().should('eq', 'http://localhost:3000/Uzbekistan')
        })
    });

    it('Should render a page displaying a quiz question about the selected country & answer field', () => {
        cy.get('h1').contains('What In The World')
        .get('h2').contains('Uzbekistan')
        .get('.answer-input').should('be.visible')
        .get('.submit-button').should('be.visible')
    })



})