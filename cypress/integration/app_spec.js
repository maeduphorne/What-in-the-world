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
})