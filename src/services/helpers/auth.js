class Auth {

    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = true;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {

        let login_session = JSON.parse(localStorage.getItem('login')) ? JSON.parse(localStorage.getItem('login'))['access_token'] : '';
        return login_session ? true : this.authenticated ;
    }
}

export default new Auth();
