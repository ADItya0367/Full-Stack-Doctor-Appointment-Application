"use strict"

// User Controller:

const User = require('../models/user')


module.exports = {

    list: async (req, res) => {

        const data = await res.getModelList(User)

        res.status(200).send({
            error: false,
            details: await res.getModelList(User)
        })

    },

    create: async (req, res) => {

        const data = await User.create(req.body)

        res.status(201).send({
            error: false,
            body:req.body,
            data
        })

    },

    read: async (req, res) => {
        // const data = await User.findOne({ _id: req.params.id })
        const data = await User.findOne(req.params._id)

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "firstName": "test",
                    "lastName": "test",
                }
            }
        */

        // Sadece kendi kaydını güncelleyebilir:
        const customFilters = req.user?.isAdmin ? { _id: req.params.id } : { _id: req.user._id }

        // Yeni kayıtlarda admin/staff durumunu değiştiremez:
        if (!req.user?.isAdmin) {
            delete req.body.isStaff
            delete req.body.isAdmin
        }
        
        const data = await User.updateOne(customFilters, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await User.findOne(customFilters),
        })

    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */

        // Permission tarafında permissions.isAdmin kontrolü yapıldığı için burda gerek kalmadı.

        if (req.params.id != req.user._id) {

            const data = await User.deleteOne({ _id: req.params.id })
    
            res.status(data.deletedCount ? 204 : 404).send({
                error: !data.deletedCount,
                data
            })

        } else {
            // Admin kendini silemez.
            res.errorStatusCode = 403
            throw new Error('You can not remove your account.')
        }
    },
    login: async (req, res) => {

        const { email, password } = req.body

        if (email && password) {

            // const user = await User.findOne({ email: email, password: passwordEncrypt(password) })
            // No need passwordEncrypt, because using "set" in model:
            const user = await User.findOne({ email: email, password: password })
            if (user) {

                // Set Session:
                req.session = {
                    user: {
                        id: user.id,
                        email: user.email,
                        password: user.password
                    }
                }
                // Set Cookie:
                if (req.body?.rememberMe) {
                    // Set Cookie maxAge:
                    req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3 // 3 Days
                }

                res.status(200).send({
                    error: false,
                    result: user,
                    session: req.session
                })

            } else {

                res.errorStatusCode = 401
                throw new Error('Login parameters are not true.')

            }

        } else {

            res.errorStatusCode = 401
            throw new Error('Email and Password are required.')

        }

    },

    logout: async (req, res) => {
        // Set session to null:
        req.session = null
        res.status(200).send({
            error: false,
            message: 'Logout OK'
        })
    }

}