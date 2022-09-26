const express = require('express');
const router  = express.Router();

router.get('/login', (req, res) => {
    res.render('accounts/login');
})

router.get('/register', (req, res) => {
    res.render('accounts/register');
})

router.get('/new', (req, res) => {
    res.send('create');
})

module.exports = router;