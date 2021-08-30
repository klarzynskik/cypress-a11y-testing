describe('dummy form', () => {

    beforeEach(() => {
        cy.visit('')
    })

    it('should allow submitting data', () => {
        cy.findByLabelText('Name:').type('Dummy')
        cy.findByLabelText('Last Name:').type('Tester')
        cy.findByLabelText('Books').click()
        cy.findByText('Submit').click()
        cy.findByText('Thanks for submitting the form!').should('be.visible')
    })
})