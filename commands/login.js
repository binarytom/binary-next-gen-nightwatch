exports.command = function(username, callback){
    var element = this.globals.pages;
    callback = callback || function(){};
    this
        .waitForElementPresent('a[class="signin-button btn-primary"]', 1000)
        .click('a[class="signin-button btn-primary"]')
        .keys(['\uE015', '\uE006'])
        .pause(1000)
        .waitForElementPresent(element.login.emailTextBox, 1000)
        .waitForElementPresent(element.login.passwordTextBox, 1000)
        .setValue(element.login.emailTextBox, username)
        .setValue(element.login.passwordTextBox, element.login.password)
        .waitForElementVisible('button[id=' + element.login.signinButton + ']', 1000)
        .click('button[id=' + element.login.signinButton + ']')
        .keys(['\uE015', '\uE006'])
        .pause(1000)
        .execute(function(data) {
            return (!!document.getElementById(element.login.emailTextBox));
        },[], function(result){
            return callback.call(this,result);
        });

    return this;
};
