describe('Register User', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com');
    cy.get("a[href='/login']").click()
    // cy.contains('Automation Exercise',{timeout: 10000});
    let user_name="samson"
    cy.get("input[data-qa='signup-name']").type(`${user_name}`)
    var random = Math.random().toString(36).substring(2);
    var useremail = "saurabh" + random + "@gmail.com";
    cy.get("input[data-qa='signup-email']").type(`${useremail}`)
    cy.get("button[data-qa='signup-button']").click();
    cy.get(':nth-child(1) > b').should('be.visible');
    cy.get(':nth-child(1) > b').scrollIntoView();
    cy.get('#id_gender1').check();
    cy.get('#password').type("Sacs@20001");
    cy.get("#days").select('24');
    cy.get("#months").select('January');
    cy.get("#years").select('2005');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('#first_name').type("Sanjay");
    cy.get('#last_name').type("Singh");
    cy.get('#company').type("tata");
    cy.get('#address1').type("houseno 211");
    cy.get('#address2').type("main road");
    cy.get("#country").select('India');
    cy.get('#state').type("raj");
    cy.get('#city').type("jaipur");
    cy.get('#zipcode').type("411028");
    cy.get('#mobile_number').type("123456789");
    cy.get("button[data-qa='create-account']").click();
    cy.get(".btn.btn-primary").click();
    cy.get('li:nth-child(10) a:nth-child(1)').should('have.text',` Logged in as ${user_name}`);
    cy.get("a[href='/delete_account']").click();
    cy.get("b").should('have.text',`Account Deleted!`);
    cy.get(".btn-primary").click();

    cy.pause();
    
    cy.visit('url');
  })
})