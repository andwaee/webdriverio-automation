import Page from './page.js';
// import WebCommonUtility from '../../common-utility/web-common-util.js';

const username = process.env.sampleUsername;
const password = process.env.samplePassword;

class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }


    async login () {
        await this.inputUsername.setValue(username);  
        await this.inputPassword.setValue(password);
        await this.takeScreenshot();
        await this.loginButton.click();
    }


    open () {
        return super.open('https://www.saucedemo.com/');
    }

    takeScreenshot(){
        return super.takeScreenshot();
    }

    async userIsLoggedIn(){
        await this.open();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
        await this.takeScreenshot();
    }
}

export default new LoginPage();
