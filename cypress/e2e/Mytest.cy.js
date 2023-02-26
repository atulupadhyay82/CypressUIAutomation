describe('suite name',() => {

    it('test1', ()=>{
        cy.visit("www.google.com");
       cy.title().should('eq','Google'); 
        
    }),
    it('test using css selector',  function(){
       cy.visit("https://www.saucedemo.com");
       cy.get("#user-name").type("standard_user");
       cy.get("#password").type("secret_sauce");
       cy.get("#login-button").click();
       cy.get("span.title").contains("Products");   
    }),
    it('test using xpath selector',  function(){
        cy.visit("https://www.saucedemo.com");
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.xpath("//div[@class='inventory_item']").should("have.length",6);   
        
     }),
     it('implicit assertion using Should,and',  function(){
      cy.visit("https://www.saucedemo.com");
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      cy.get("#login-button").click();
      cy.get("span.title").contains("Products");  
      
      cy.url().should('include','saucedemo');
      cy.url().should('eq','https://www.saucedemo.com');
      cy.url().should('contain','saucedemo');

      //Another way to write is, you don't need to write cy.url() and capturing the url multiple times
      cy.url().should('include','saucedemo')
      .should('eq','https://www.saucedemo.com') 
      .should('contain','saucedemo');

      //Another way is to use and instead of using Should multiple times
      cy.url().should('include','saucedemo')
      .and('eq','https://www.saucedemo.com') 
      .and('contain','saucedemo');


   })
})