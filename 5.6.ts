class User3 {
    _login: string;
    password: string;

    set login(l: string) {
        this._login = 'user-' + 1;
    }

    get login() {
        return 'no_login';
    }
}

const user3 = new User3();
user3.login = 'myLogin';
console.log(user);
