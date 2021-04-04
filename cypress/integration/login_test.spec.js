/// <reference types="cypress" />

context('TestSetByMarian', () => {

    beforeEach(() => {
        cy.visit("https://www.caseative.com/");
        cy.wait(500);

        cy.get('.site-header--meta-links > #customer_login_link')
            .should('be.visible')
            .click()
            .wait(100);

        cy.location('href')
        .should('eq', 'https://www.caseative.com/account/login');

        cy.get('#customer_email')
            .should('be.visible')
            .clear();

        cy.get('#customer_password')
            .should('be.visible')
            .clear();

        cy.get(':nth-child(9) > .btn').should('be.visible');
    })

    /*it('Case-1. Negative. Wrong e-mail verification', function () {
        cy.get('#customer_email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');

        cy.get('#customer_password')
            .type('some_pass');

        cy.get(':nth-child(9) > .btn')
            .click();

        cy.wait(1000);

        cy.get('.disc > li')
            .contains('Incorrect email or password.')
    })

    it('Case-2. Negative. Wrong password verification', function () {
        cy.get('#customer_email')
            .type('mkolobich@gmail.com')
            .should('have.value', 'mkolobich@gmail.com');

        cy.get('#customer_password')
            .type('some_pass');

        cy.get(':nth-child(9) > .btn')
            .click();

        cy.wait(1000);

        cy.get('.disc > li')
            .contains('Incorrect email or password.')
    })

    it('Case-3. Positive. LogIn', function() {
        cy.get('#customer_email')
            .type('mkolobich@gmail.com')
            .should('have.value', 'mkolobich@gmail.com');

        cy.get('#customer_password')
            .type('qweasdzxc12');

        cy.get(':nth-child(9) > .btn')
            .click();

        cy.wait(500);

        cy.get('.one-third > .h4')
            .contains('Account Details');
    })

    it('Case-4. Positive. Press Forgot your password?', function() {
        cy.get('#customer_login > :nth-child(8) > a')
            .contains('Forgot your password?')
            .click();

        cy.get('#recover_password > :nth-child(2)')
            .contains('We will send you an email to reset your password.');
    })

    it('Case-5. Enter the valid credentials to log in to the account', function() {
        cy.get('#customer_email')
            .type('thomasshelbytest@gmail.com')
            .should('have.value', 'thomasshelbytest@gmail.com');

        cy.get('#customer_password')
            .type('Qwerty11111@');

        cy.get(':nth-child(9) > .btn')
            .click();

        cy.wait(500);

        cy.get('.site-header--meta-links > [href="/account"]')
            .contains('Thomas');

        cy.get('.site-header--meta-links > #customer_logout_link')
            .should('be.visible');

        cy.get('.site-header--meta-links > #customer_logout_link')
            .should('be.visible')
            .click();
        
        cy.location('href')
            .should('eq', 'https://www.caseative.com/');
    })*/

    it('Case-6. Positive. Press Return to Store', function() {
        cy.get('[href="https://www.caseative.com"]')
            .should('be.visible')
            .click();
        
        cy.location('href')
            .should('eq', 'https://www.caseative.com/');
    })
    
})