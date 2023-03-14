import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';

Given(/^User is on login page$/, async () => {
    await browser.url("/");
});

When(/^User enters username and password$/, async () => {
    await LoginPage.enterUsernameandPassword();
});

When(/^Clicks login button$/, async () => {
    await LoginPage.clickLoginButton();
});

Then(/^User is logged in$/, async () => {
    await browser.pause(10000);
});
