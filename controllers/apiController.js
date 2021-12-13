/**
 * Controller API
 */

const {
    User
} = require('../models')

module.exports = {
    userLogin: async(req, res) => {
        User.authenticate(req.body)
            .then(user => {
                res.json({
                    id: user.id, 
                    username: user.username, 
                    accessToken: user.generateToken()
                })
            })
    },
    me: (req, res) => {
        res.json(req.user)
    }
}