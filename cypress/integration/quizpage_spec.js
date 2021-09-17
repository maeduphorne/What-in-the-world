describe('Quiz Page User Flow', () => {
    beforeEach(() => {
        it('Should select a country and move to that country\'s quiz page', () => {
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
    // stub and pass data to question field - 1 for capital && 1 for borders
    // it Should allow a user to input an answer to the question and submit
    // it Should render text telling the user if the answer is incorrect or correct
    // it Should render text telling the user some facts about the country
    // SAD - if the user enter secial characters, an error messages is visible
    // it Should bring the user back to the home page by clicking the Header


})