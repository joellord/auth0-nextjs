import auth0 from "auth0-js";
import AUTH0_CONFIG from "./auth0-credentials";

class Auth {
    config = Object.assign(AUTH0_CONFIG, {scope: "openid profile"});
    auth0 = new auth0.WebAuth(this.config);
    userProfile;

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication(hash) {
        this.auth0.parseHash({hash: hash},(err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log("You are authenticated, setting session");
                this.setSession(authResult);
                console.log("YOU ARE LOGGED IN");
            } else if (err) {
                console.log("SOMETHING WENT WRONG");
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);

        console.log("Session was stored");
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        console.log("You are logged out");
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        console.log("Is user authenticated ? " + (new Date().getTime() < expiresAt) ? "Yes" : "No");
        return new Date().getTime() < expiresAt;
    }

    getProfile() {
        let accessToken = localStorage.getItem("access_token");
        let self = this;

        return new Promise ((resolve, reject) => {
            this.auth0.client.userInfo(accessToken, (err, profile) => {
                if (profile) {
                    self.userProfile = profile;
                    resolve(profile);
                } else {
                    reject(err);
                }
            });
        });

    }
}

export default Auth;