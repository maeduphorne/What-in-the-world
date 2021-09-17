
describe('Quiz Page User Flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Uzbekistan')
        // // // .url().should('eq', 'http://localhost:3000/Uzbekistan')
        // // cy.visit('http://localhost:3000/Uzbekistan')
    })

    it('Should render a page displaying a quiz question about the selected country & answer field', () => {
        // cy.get('.country-dropdown')
        // .select('Uzbekistan')
        //     .get('.dropdown-btn').click()
            // .url().should('eq', 'http://localhost:3000/Uzbekistan')
            // .url().should('not.eq', 'http://localhost:3000/')
            cy.get('h1').contains('What In The World')
            const questions = [
            'What is the population of?',
            'What is the capital of? ',
            'How many countries border?'
           ]
        
            const getRandomElement = () => {
                const result = questions[Math.floor(Math.random() * questions.length)]
                cy.get('h2').contains(result)    
                }
            // cy.get('h2').contains('What is the population of Uzbekistan?')
            cy.get('.answer-input').should('be.visible')
        // cy.get('h1').contains('What In The World')
        // .get('h2').contains('What is the population of?')
        // .get('.answer-input').should('be.visible')
        // .get('.submit-button').should('be.visible')
    })

    // // SAD PATH
    // it('Should render an error message & stay on form page if a user enters special characters', () => {
    //     cy.get('.answer-input').type('@@@')
    //     cy.get('.input-error-message').should('be.visible')
    // })

    // stub and pass data to question field - 1 for capital && 1 for borders
    // it Should allow a user to input an answer to the question and submit
    //ATTEMPT AT CONDITONAL - leaving so that tests go to next page
    // it('conditional for randomized questions', () => {
    //     cy.get('h2').then((header) => {
    //         if(header.find('capital')){
    //             cy.get('.answer-input').type('Tashkent')
    //             cy.get('.submit-button').click()
    //         } else if(header.find('population')) {
    //             cy.get('.answer-input').type('31576400')
    //             cy.get('.submit-button').click()
    //         } else {
    //             cy.get('.answer-input').type('5')
    //             cy.get('.submit-button').click()
    //         }
    //     })
    //     })

    // it('should have statements for randomized questions', () => {
    //         cy.url().should('eq', 'http://localhost:3000/Uzbekistan')
    //         cy.get('h2').should('have.value', '')
    //         cy.get('h2').contains('What is the capital of Uzbekistan?')


            //         cy.get('.answer-input').type('Tashkent')
            //         cy.get('.submit-button').click()
            //     } else if(header.find('population')) {
            //         cy.get('.answer-input').type('31576400')
            //         cy.get('.submit-button').click()
            //     } else {
            //         cy.get('.answer-input').type('5')
            //         cy.get('.submit-button').click()
            //     }
            // })
            // })

    //ATTEMPTING FIXTURES
    // it('questions', () => {
    //     cy.fixture('questions').then(questionsFix)
    //     expect(questions.name).to.equal(['What is the population of'])
    // })

    //ATTEMPT AT STUBBING
    // it('stubbin', () => {
    //     let getRandomElement = cy.stub()
    //     getRandomElement()
    //     expect(getRandomElement).to.be.called
    //     let result;

        // cy.stub(questions, 'getRandomElement', () => {
        //     result = questions[1]
        //     setQuestions((result))
        // })
        // useEffect()
        // cy.should('eq', questions[1])
    // })

    // it('Should tell the user if their guess was correct or incorrect', () => {
    //     cy.get('.user-guess').contains('Your guess was')
    //     //Will need to change the value below based on what text is entered as a response
    //     cy.get('h3').contains('Incorrect')
    // })

    // it('Should render text telling the user about the country', () => {
    //     cy.get('.subregion-fact').contains('Central Asia')
    //     //Add more facts referencing their className in the <p> tag
    // })

    // it('Should bring the user back to the home page by clicking the Header', () => {
    //     cy.get('.home-click').click()
    //     cy.get('h1').contains('What In The World')
    //     cy.get('.worldMapImg').should('be.visible')
    //     cy.get('.country-dropdown')
    //         .should('be.visible')
    //         .should('have.value', '')
    // })

// })
})