const { useEffect } = require("react");

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
    it('conditional for randomized questions', () => {
        cy.get('h2').then((header) => {
            if(header.find('capital')){
                cy.get('.answer-input').type('Tashkent')
                cy.get('.submit-button').click()
            } else if(header.find('population')) {
                cy.get('.answer-input').type('31576400')
                cy.get('.submit-button').click()
            } else {
                cy.get('.answer-input').type('5')
                cy.get('.submit-button').click()
            }
        })
        })
    // it('stubbin', () => {
        // let getRandomElement = cy.stub()
        // getRandomElement()
        // expect(getRandomElement).to.be.called
        // let result;

        // cy.stub(questions, 'getRandomElement', () => {
        //     result = questions[1]
        //     setQuestions((result))
        // })
        // useEffect()
        // cy.should('eq', questions[1])
    // })

    // it Should allow a user to input an answer to the question and submit
    // it Should render text telling the user if the answer is incorrect or correct
    it('Should tell the user if their guess was correct or incorrect', () => {
        cy.get('.user-guess').contains('Your guess was')
        cy.get('h3').contains('Incorrect')
    })
    // it Should render text telling the user some facts about the country
    it('Should render text telling the user about the country', () => {
        cy.get('.subregion-fact').contains('Central Asia')
        //Add more facts referencing their className in the <p> tag
    })
    // SAD - if the user enter special characters, an error messages is visible
    // it Should bring the user back to the home page by clicking the Header


})