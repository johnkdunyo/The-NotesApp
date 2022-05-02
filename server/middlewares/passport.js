const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


// configure jwt options
const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY,
};

const strategy = new JwtStrategy( options, async (payload, done) => {
    try {
        // console.log(payload)
        // done and append  user object from the jwt token to the req 
        done(null, payload)
    } catch (error) {
        done(error)
    }
});

passport.use('jwt', strategy);

module.exports = passport;