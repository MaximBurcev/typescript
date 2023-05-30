"use strict";
class User3 {
    set login(l) {
        this._login = 'user-' + 1;
    }
    get login() {
        return 'no_login';
    }
}
const user3 = new User3();
user3.login = 'myLogin';
console.log(user);
