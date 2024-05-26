"use strict"

const router = require('express').Router()
// routes/user:

const user = require('../controllers/user')

// URL: /users

router.post('/login', user.login)
router.all('/logout', user.logout)

router.route('/')
    .get(user.list)
    .post(user.create)

router.route('/:id')
    .get(user.read)
//     .put(permissions.isLogin, user.update)
//     .patch(permissions.isLogin, user.update)
//     .delete(permissions.isAdmin, user.delete)

module.exports = router