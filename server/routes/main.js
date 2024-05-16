
const express = require('express')
const router = express.Router()

router.get('/pin', (req, res)=> {

    const locals = {
        title: "Authentication",
        description: "Authentication page"
    }
    res.render('pin', {locals})
})

router.get('/register', (req, res) => {
    const locals = {
        title: "Register",
        description: "Register page"
    }
    res.render('register', {locals})
})

router.get('/login', (req, res)=> {
    const locals = {
        title: "login",
        description: "login page"
    }
    res.render('login', {locals})
})

router.get('/welcome', (req, res)=> {
    const locals = {
        title: "Welcome",
        description: "Welcome page"
    }
    res.render('welcome', {locals})
})

router.get('/transfer', (req, res)=> {
    const locals = {
        title: "Transfer",
        description: "Transfer page"
    }
    res.render('transfer', {locals})
})

router.get('/balance', (req, res)=> {
    const locals = {
        title: "Balance",
        description: "Balance page"
    }
    res.render('balance', {locals})
})

router.get('/mini-statement', (req, res)=> {
    const locals = {
        title: "Mini-statement",
        description: "Mini-statement page"
    }
    res.render('mini-statement', {locals})
})

router.get('/withdrawal', (req, res)=> {
    const locals = {
        title: "Withdrawal",
        description: "Withdrawal page"
    }
    res.render('withdrawal', {locals})
})

router.get('/cash-deposit', (req, res)=> {
    const locals = {
        title: "Cash-deposit",
        description: "Cash-deposit page"
    }
    res.render('cash-deposit', {locals})
})

router.get('/change-pin', (req, res)=> {
    const locals = {
        title: "Change-pin",
        description: "Change-pin page"
    }
    res.render('change-pin', {locals})
})

module.exports = router;