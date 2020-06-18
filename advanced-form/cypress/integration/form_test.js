// lets write some tests
describe('Inputs and submit button', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'http://localhost:3000')
    })
    it('submit button should be disabled', () => {
        cy.get('button#myBtn').should('be.disabled')
    })
    
    //testing first name
    it('can type a first name', () => {
        cy.get('input[name=first_name]')
        .type('John')
        .should('have.value', 'John')
    })

    // testing last name
    it('can type a last name', () => {
        cy.get('input[name=last_name]')
        .type('Petrucci')
        .should('have.value', 'Petrucci')
    })

    // testing email
    it('can type an email', () => {
        cy.get('input[name=email]')
        .type('JP@Dreamtheater.com')
        .should('have.value', 'JP@Dreamtheater.com')
    })

    //testing passwords
    it('can type a password', () => {
        cy.get('input[name=password]')
        .type('password')
        .should('have.value', 'password')
    })

    // test that button is now enabled
    it('the button should be enabled now', () => {
        cy.get('button#myBtn').should('not.be.disabled')
    })

    it('can submit the form', () => {
        cy.get('button#myBtn').click()
    })
})