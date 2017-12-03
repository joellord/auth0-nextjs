import auth0 from "auth0-js";
import AUTH0_CONFIG from "./auth0-credentials";

class Auth {
    // Add the openid scope to our configuration
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
        // Using the auth0 API, redirect to the login page
        this.auth0.authorize();
    }

    handleAuthentication(hash) {
        // Parse the hash and validate the authentication
        // Because this can be server rendered, the hash can't be read from the location object
        this.auth0.parseHash({hash: hash},(err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
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
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    getProfile() {
        // Get the user profile and return a Promise
        let accessToken = localStorage.getItem("access_token");
        let self = this;

        return new Promise ((resolve, reject) => {
            if (self.userProfile) {
                resolve(userProfile);
            } else {

                this.auth0.client.userInfo(accessToken, (err, profile) => {
                    if (profile) {
                        self.userProfile = profile;
                        resolve(profile);
                    } else {
                        reject(err);
                    }
                });
            }
        });

    }
}

export default Auth;