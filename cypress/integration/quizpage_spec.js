
describe('Quiz Page User Flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('.country-dropdown')
          .select('Uzbekistan')
          .get('.dropdown-btn').click()
        cy.url().should('eq', 'http://localhost:3000/Uzbekistan')
    })

    it('Should render a page displaying a quiz question about the selected country & answer field', () => {
        cy.get('h1').contains('What In The World')
        cy.get('h2').should('contain', 'Uzbekistan?')
          .get('.answer-input').should('be.visible')
          .get('.submit-button').should('be.visible')
    })

    // // SAD PATH
    it('Should render an error message & stay on form page if a user enters special characters', () => {
        cy.get('.answer-input').type('@@@')
        cy.get('.input-error-message').should('be.visible')
    })

    it('Should be able to type an answer and submit the answer', () => {
        cy.get('.answer-input').type('Tashkent')
        cy.get('.submit-button').click()
    })

    it('Shoud load a new answers section telling the user if they are correct & giving more facts', () => {
        cy.get('.answer-input').type('100000')
        cy.get('.submit-button').click()
        cy.get('h2').should('contain', 'Uzbekistan?')
        cy.get('.user-guess').should('contain', 'Your guess was')
        cy.get('h3').should('be.visible')
        cy.get('.extra-facts').should('be.visible')
        cy.get('.home-btn').click()
        cy.visit('http://localhost:3000/')
        cy.get('.home-click').click()
        cy.visit('http://localhost:3000/')
    })

    it('Should bring the user back to the home page by clicking the home button', () => {
        cy.visit('http://localhost:3000/')
        cy.get('h1').contains('What In The World')
        cy.get('.country-dropdown')
            .should('be.visible')
            .should('have.value', '')
    })

    it('Should bring the user back to the home page by clicking the Header', () => {
        cy.visit('http://localhost:3000/')
        cy.get('h1').contains('What In The World')
        cy.get('.country-dropdown')
            .should('be.visible')
            .should('have.value', '')
    })
})