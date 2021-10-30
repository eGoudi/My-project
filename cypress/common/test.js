import { Then } from 'cypress-cucumber-preprocessor/steps';




Then(`Alors je dois visualiser les fils d’actualités dans mon espace personnel `, () => {
  cy.contains(
    `post 1`,
  ).should('be.visible');
});

