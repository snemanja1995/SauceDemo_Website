class LoginPage {
    
    get usernameField () {
        return $("//input[@id='user-name']");
    }

    get passwordField () {
        return $("//input[@id='password']");
    }

    get submitButton () {
        return $('input[type="submit"]');
    }


    async enterUsernameandPassword() {
        await this.usernameField.setValue("standard_user");
        await this.passwordField.setValue("secret_sauce");

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
}

export default new LoginPage();