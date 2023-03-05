describe('Demo Radio buttons and checkboxes',() => {

    it('checking radio buttons', ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        
        //visibility of radio buttons
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

    }),
    it('verify check boxes', ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        
        //visibility of radio buttons
        cy.get("input#monday").should('be.visible')
    
        //selecting the single checkbox
        cy.get("input#monday").check().should('be.checked')

        //unselecting the checkbox
        cy.get("input#monday").uncheck().should('not.be.checked')

        //selecting all the checkboxes- Find a locator which will locate all the checkbox. cy.get() will return
        //single element or all the elements based on locators. No separate method for findElements() like in Selenium we have.
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //Unselect all the checkboxex in one go
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //Select first checkbox and last one only
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')



    })


});