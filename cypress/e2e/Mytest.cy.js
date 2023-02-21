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
        
     })
})