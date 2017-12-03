const AUTH0_CREDS = {
    domain: 'xxxxxxxx.auth0.com',
    clientID: 'xxxxx',
    responseType: 'token id_token',
    audience: 'https://xxxxx.auth0.com/userinfo',
    redirectUri: "http://localhost:3000/callback"
};

module.exports = AUTH0_CREDS;