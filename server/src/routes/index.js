"use strict"

const router = require('express').Router()
// routes/:

// URL: /

// auth:
// router.use('/auth', require('./auth'))
// user:
router.use('/users', require('./user'))
// token:
// router.use('/tokens', require('./token'))



// document:
// router.use('/documents', require('./document'))

module.exports = router