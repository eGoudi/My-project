Cypress.Commands.add('login', (role = 'e90e9010-8630-11eb-b1b8-559366982d14') => {


  if(role === 'e90e9010-8630-11eb-b1b8-559366982d14'){


    cy.request({
      method: 'GET',
      url: 'http://localhost:3500/oauth/fakeLogin', // baseUrl is prepended to url
      qs : {
        oAuthId : 'e90e9010-8630-11eb-b1b8-559366982d14'
      }
    }
 
  ).then(response => {
    

    console.log(response.body);

    window.localStorage.setItem('access_token', response.body);
    
  
   
 
  });


 
 

  
   


  }


 });

  

