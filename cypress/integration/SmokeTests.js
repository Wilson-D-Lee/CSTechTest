/// <reference types = "cypress"/>
import {IndexPage} from "../Pages/PageObjects"
const indexPage = new IndexPage();

it('Test 1 - Cookies does not reappear after being dismissed', function(){
    // Test “We use cookies” notification is present
    indexPage.navigate('https://clearscore.com');
    // Test “We use cookies” notification is present
    indexPage.we_use_cookies_notification_should_be_present();
    // Test “We use cookies” notification can be dismissed
    indexPage.accept_cookie_settings();
    // Test “We use cookies” notification does not reappear after being dismissed
    indexPage.reload_page();
    
})

it('Test 3 - Registration page is accessable', function(){
    indexPage.navigate('https://clearscore.com');
    // Test “We use cookies” notification can be dismissed
    indexPage.accept_cookie_settings();
    // an email address is required to sign up
    indexPage.enter_new_email(); 
    // a valid email address must be provided to sign up
    indexPage.click_see_score_button(); 
    // when a valid email address is provided, and Sign up is clicked, the user is taken to step 1 of registration
    indexPage.user_is_navigated_to_registration_step1();
})

it.only('Test 3.5 - User is able to create an account', function(){
    indexPage.navigate('https://clearscore.com');
    // Test “We use cookies” notification can be dismissed
    indexPage.accept_cookie_settings();
    // an email address is required to sign up
    indexPage.enter_new_email(); 
    // a valid email address must be provided to sign up
    indexPage.click_see_score_button(); 
    // when a valid email address is provided, and Sign up is clicked, the user is taken to step 1 of registration
    indexPage.user_is_navigated_to_registration_step1();
    // user inputs full name 
    indexPage.user_inputs_registration_info();
    // user clicks to agrees with terms and conditions  
    indexPage.user_agree_with_terms_and_conditions();
    // user clicks to agrees with privacy policy 
    indexPage.user_clicks_to_agrees_with_privacy_policy();
    // Create my free acount Button should be enabled
    indexPage.user_creates_free_account();
})


