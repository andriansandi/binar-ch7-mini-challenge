// Include Model
const { 
    User
} = require('../models');

// Include passport
const passport = require('../lib/passport');

const bcrypt = require('bcrypt');

module.exports = {
    // menampilkan dashboard users
    dashboard: (req, res) => {
        res.render('users/dashboard', {
            user: req.user
        });
    },
    // proses register
    doRegister: (req, res, next) => {
        User.register(req.body)
            .then(() => {
                res.redirect('/login')
            })
            .catch(err => next(err));
    },
    // menampilkan form registrasi
    formRegister: (req, res, next) => {
        res.render('users/register');
    },
    // proses login
    doLogin: passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/users/login',
        failureFlash: true // untuk mengaktifkan express flash
    }),
    //menampilkan form login
    formLogin: (req, res, next) => {
        res.render('users/login')
    }
}