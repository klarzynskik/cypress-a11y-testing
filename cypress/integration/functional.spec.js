describe('dummy form', () => {

    beforeEach(() => {
        cy.visit('')
    })

    it('should allow submitting data', () => {
        cy.get('[id=name]').type('Dummy')
        cy.get('[id=last-name]').type('Tester')
        cy.get('[id=books]').click()
        cy.get('[type=submit]').click()
        cy.contains('Thanks for submitting the form!').should('be.visible')
    })
})