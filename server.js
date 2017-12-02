const express = require("express");
const next = require("next");
const passport = require("passport");

const dev = process.env.NODE_ENV !== "production";
const port = dev ? 3000 : 80;
const app = next({dev});
const handle = app.getRequestHandler();
//
// const Auth0Strategy = require('passport-auth0');
//
// // Configure Passport to use Auth0
// const strategy = new Auth0Strategy(
//     {
//         domain: 'joellord.auth0.com',
//         clientID: '7zAqY7aqkve0zvFyRIfZCjW34ncmPbcm',
//         clientSecret: 'bLb-5JoFidQNRtnnU8tm57xyhIZjrGG1c5hOGHdJQQVKijITQ3aKInM6mHMofsVL',
//         callbackURL: 'http://localhost:3000/auth-callback'
//     },
//     (accessToken, refreshToken, extraParams, profile, done) => {
//         console.log("HERE I AM");
//         return done(null, profile);
//     }
// );
//
// passport.use(strategy);
// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//     done(null, user);
// });

app.prepare()
    .then(() => {
        const server = express();
        // server.use(passport.initialize());
        // server.use(passport.session());
        //
        // server.get("/auth-login", (req, res) => {
        //
        // });

        // server.get('/auth-callback', passport.authenticate('auth0', {
        //         failureRedirect: '/'
        //     }), function(req, res) {
        //         return handle(req, res);
        //     }
        // );

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log("> Read on http://localhost:" + port)
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });