import { When } from 'cypress-cucumber-preprocessor/steps';



When(`je me connecte sur mon espace personnel`, name => { 

    cy.get('#id').type("username")
    cy.get('#id').type("password")
    cy.get('#id').click()


  });


