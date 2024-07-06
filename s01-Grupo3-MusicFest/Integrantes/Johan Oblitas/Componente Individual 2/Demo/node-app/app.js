const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { Strategy } = require('passport-openidconnect');

passport.use('oidc', new Strategy({
    issuer: 'http://localhost:8080/auth/realms/demo',
    authorizationURL: 'http://localhost:8080/auth/realms/demo/protocol/openid-connect/auth',
    tokenURL: 'http://localhost:8080/auth/realms/demo/protocol/openid-connect/token',
    userInfoURL: 'http://localhost:8080/auth/realms/demo/protocol/openid-connect/userinfo',
    clientID: 'node-app',
    clientSecret: 'yXI7PvS6sFalymJhistKInYvnIAR9D0E',
    callbackURL: 'http://localhost:3000/callback',
    scope: 'openid profile email'
}, (issuer, sub, profile, accessToken, refreshToken, done) => {
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

const app = express();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', passport.authenticate('oidc'));

app.get('/callback', passport.authenticate('oidc', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/');
});

app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Hello ${req.user.displayName}`);
    } else {
        res.send('Hello Guest. <a href="/login">Log in with Keycloak</a>');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
