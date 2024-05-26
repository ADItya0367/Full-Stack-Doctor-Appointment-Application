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
       
        const customFilters = req.user?.isAdmin ? { _id: req.params.id } : { _id: req.user._id }

        // const data = await User.findOne({ _id: req.params.id })
        const data = await User.findOne(customFilters)

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

}