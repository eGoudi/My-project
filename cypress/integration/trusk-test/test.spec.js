/// <reference types="cypress" />

it('Should work as expected', () => {
    cy.visit('http://localhost:3000')
    // title
    cy.title().should('eq', 'QA @ Trusk')
    // elements
    cy.get('h1').should('be.visible')
    cy.get('p').should('be.visible')
    cy.get('label').should('be.visible')
    cy.get('input').should('be.visible')
    cy.get('button').should('be.visible')
    // submit empty
    cy.get('input').first().clear()
    cy.get('input').last().clear()
    cy.get('button').click()
    cy.contains('Renseignes une adresse e-mail!').should('be.visible')
    cy.contains('Renseignes un mot de passe!').should('be.visible')
    // submit invalid email
    cy.get('input').first().clear().type('adrian-trusk')
    cy.get('button').click()
    cy.contains('Renseignes une adresse e-mail valide!').should('be.visible')
    // submit wrong email
    cy.get('input').first().clear().type('adrian.pothuaud@trusk.com')
    cy.get('button').click()
    cy.contains('Renseignes la bonne adresse e-mail!').should('be.visible')
    // submit bad password
    cy.get('input').first().clear().type('adrian@trusk.com')
    cy.get('input').last().clear().type('adrian')
    cy.get('button').click()
    cy.contains('Renseignes le bon mot de passe').should('be.visible')
    // submit valid credentials
    cy.get('input').first().clear().type('adrian@trusk.com')
    cy.get('input').last().clear().type('adrian@trusk.com')
    cy.get('button').click()
    cy.contains('Salut testeur !').should('be.visible')
    // get back
    cy.contains('Retour').click()
    cy.title().should('eq', 'QA @ Trusk')
    cy.get('h1').should('be.visible')
    cy.get('p').should('be.visible')
    cy.get('label').should('be.visible')
    cy.get('input').should('be.visible')
    cy.get('button').should('be.visible')
})