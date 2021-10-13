export class IndexPage{

//Page Objects 

    //Index Page 
    indexPageEmailInput = "#email";
    seeScoreButton = ".emailForm--1QAYM > .button--1AiWf";
    cookiesPopUp = ".component---iKNW"; 
    cookiesPopUpDismiss = ".component---iKNW > .button--1AiWf"; 

    // Registeration Page 
    createFreeAccountBtn = ".button_button__d05233fd"; 

    // Alpha Numerical Sting Genorator for Email
    genorateRandomEmail = Math.random().toString(20).substr(2, 6) + "@gmail.com"; 
    genorateRandomPassword = Math.random().toString(20).substr(2, 6)
    

//Functions related to steps

    navigate(url){
        //navigate to clearscore.com
        cy.visit(url);
    }

    we_use_cookies_notification_should_be_present(){
        //asserting if cookies notification is visible  
        cy.get(this.cookiesPopUp).should("be.visible");
    }

    accept_cookie_settings(){
        //Accept cookie setting function 
        if(cy.get(this.cookiesPopUp).parent){
            cy.get(this.cookiesPopUpDismiss).click(); 
        }else{
            console.log("Please Clear Site Cookies");
            cy.get(url).clearCookies();
        }
    }

    reload_page(){
        //Reload page function 
        cy.reload();
        cy.get(this.cookiesPopUp).should('not.exist');
    }

    enter_new_email(email){
        //Enter email function 
        cy.get(this.indexPageEmailInput).click().type(this.genorateRandomEmail);
    }

    click_see_score_button(){
        //And Sign-up is clicked function 
        cy.get(this.seeScoreButton).click({ timeout: 10000 });
    }

    user_is_navigated_to_registration_step1(){
        //Then the user is taken to step 1 of registration function 
        cy.wait(10000);
        cy.get(this.createFreeAccountBtn).should("be.visible").should("be.disabled");
    }

    user_inputs_registration_info(){
        //user inputs full name 
        cy.get('#fullName').click().type("Wilson Lee");
        cy.get('#dob').click().type('14/07/1994');
        cy.get('#password').type(this.genorateRandomPassword+"TestLead1973"); 
    }

    user_agree_with_terms_and_conditions(){
        //user clicks to agrees with terms and conditions
        cy.get(':nth-child(5) > .index_spacing__9ea5f02a > .checkbox_label__c7492881').click(); 
        cy.get(':nth-child(2) > .criteria_icon__9ae4c858 > svg > g > path').should("be.visible");
    }

    user_clicks_to_agrees_with_privacy_policy(){
        //user clicks to agrees with privacy policy
        cy.get(':nth-child(6) > .index_spacing__9ea5f02a > .checkbox_label__c7492881').click();
        cy.get(':nth-child(2) > .criteria_icon__9ae4c858 > svg > g > path').should("be.visible");
    }

    user_creates_free_account(){
        //Create my free acount Button should be enabled
        cy.get('.button_button__d05233fd').should("be.enabled");
    }
}