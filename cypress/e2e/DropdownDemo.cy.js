describe("Handling the dropdown", ()=>{

    it.skip("Dropdown with select", ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html");

        //get the select dropdown and pass the value in the select ()
        //we can use have.value only with select dropdown element, can't use this one with non-select dropdown
        cy.get("#zcf_address_country")
        .select("Italy")
        .should('have.value','Italy');
    }),

    //No select tag, you need to click on dropdown box then you will see all the value along with the
    //text box, type the value and press enter key
    it("Dropdown without select- Bootstrap dropdown", ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        //Click on the dropdown element to type the value
        cy.get("#select2-billing_country-container").click();
       
        //type the value and press enter key, we pass enter command in type method
        cy.get(".select2-search__field").type('Italy').type('{enter}');

        //Non select dropdown, we can't use have.value as this is simple textbox now which will have above entered value.
        cy.get("#select2-billing_country-container").should('have.text','Italy');
    }),

    //Gives you auto suggestion in the dropdown (with the static value in the suggestion list)
    it("Auto suggested Dropdown without select- Bootstrap dropdown and static value", ()=>{

        cy.visit("https://www.wikipedia.org/");

        //Click on the dropdown element to type the value
        cy.get("input#searchInput").type('Delhi');
       
        //Capture all the suggested options and check if that value exists in that list. If yes, then click on it.
        cy.get("h3.suggestion-title").contains("Delhi University").click();
    }),

     //Gives you auto suggestion in the dropdown (with the dynamic value in the suggestion list)
     it("Auto suggested Dropdown without select- Bootstrap dropdown and dynamic value", ()=>{

        cy.visit("https://www.google.com/");

        //Click on the search box element to type the value
        cy.get("input[name='q']").type('cypress automation');

        cy.get("div.wM6W7d>span").should('have.length',12);
       
        //Capture all the options, we can't use contain as it is not guarantee we will get same options everytime
        //in the dropdown, so we will using jquery function "each"-->https://docs.cypress.io/api/commands/each
        cy.get("div.wM6W7d>span").each( ($el, index, $list) => {
            if($el.text() == "cypress automation tutorial"){
                //We can't write $el.click(). Wrap this element so that we can use cypress command on it.
                cy.wrap($el).click();
            }
        })
        cy.get("input[name='q']").should('have.value',"cypress automation tutorial");
    })
})