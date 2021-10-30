import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'



Given('je me connecte en tant que {string}', (User) => {
  let oAuthId;
  if ( User === "User-1"){
    oAuthId = 'e90e9010-8630-11eb-b1b8-559366982d14';
  }



  cy.login(oAuthId);

});
















});
