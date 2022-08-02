const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.serializeUser(function(user, done){
    try{
        console.log(user.nickname);
        done(null, user.nickname);
    }catch(e){
        console.log("serializeUser error : ", e);
    }
});

passport.deserializeUser(function(nickname, done){
    try{
        User.findOne({ nickname: nickname }, function(err, user){
           done(err, user);
        });
    }catch(e){
        console.log("deserializeUser error : ", e);
    }
})

passport.use("local", new LocalStrategy({
        usernameField: "nickname",
        passwordField: "password"
    }, (nickname, password, done) => {

    User.findOne({ nickname: nickname }, (err, user) => {
           if(err){ return done(err); }
           if(!user){ return done(null, false); }
           if(!user.password === password){ return done(null, false); }
           return done(null, user);
        });
    }
));

module.exports = passport;