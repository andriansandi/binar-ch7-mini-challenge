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
        res.render('users/dashboard');
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
    doLogin: async (req, res, next) => {
        const { username, password } = req.body;

        // Check username sudah ada di DB atau belum 
        try {
            const user = await User.findOne({ where: { username }});

            if(!user) res.redirect('/users/login');

            // compare password dengan bcrypt
            if(bcrypt.compareSync(password, user.password)) {
                // password sama
                res.redirect('/users');
            } else {
                // password tidak sama
                res.redirect('/users/login');
            }
        } catch(error) {
            next(error);
        }
    },
    //menampilkan form login
    formLogin: (req, res, next) => {
        res.render('users/login')
    }
}