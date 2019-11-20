const User = require('../models/user');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

//Simple version, without validation or sanitation
exports.index = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.status(500).send({ 'error': err.errmsg })
            return;
        }
        res.send(users);
    })
};

exports.user_create = function (req, res) {
    let user = new User(
        {
            f_name: "john",
            l_name: "doe",
            email: "ruby.scala@email.net",
            created: '2019-10-24',
            slug: "ruby.scala",
            dob: "2000-02-02",
            pwd: "passwd147258$",
            salt: "very-secret",
            friends: ["14587a54", "54524dr"]
        }
    );

    user.save(function (err) {
        if (err) {
            res.status(500).send({ 'error': err.errmsg })
            return;
        }
        res.send({ success: true })
    })
};


exports.user_login = function (req, res) {
    let email_ = req.body.email
    let password_ = req.body.password
    
    if (!email_ || !password_) {
        res.status(500).send({ 'error': 'please fill all required fields !' })
        return;
    }

    User.find({ email: email_ }, 'pwd salt', function (err, users) {
        if (err) {
            res.status(500).send({ 'error': err.errmsg })
            return;
        }

        let currentUser = users[0]
        let hash_ = crypto.pbkdf2Sync(password_, currentUser.salt, 1000, 64, `sha512`).toString(`hex`);
        if(hash_ != currentUser.pwd){
            res.status(500).send({ 'error': 'invalid credentials !' })
            return;
        }
        res.send(currentUser);
    })
};