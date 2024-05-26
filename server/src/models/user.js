"use strict"

const { mongoose } = require('../configs/dbConnection')

// const dummyUsers = [
//     {
//         username: 'user1',
//         password: 'password1',
//         email: 'user1@example.com',
//         phoneNumber: 1234567890,
//         firstName: 'FirstName1',
//         lastName: 'LastName1',
//         dateOfBirth: new Date('1990-01-01'),
//         gender: 'Male',
//         medicalHistory: ['Asthma'],
//         address: 'Address1',
//         isActive: true
//     },
//     {
        // username: 'user2',
        // password: 'password2',
        // email: 'user2@example.com',
        // phoneNumber: 1234567891,
        // firstName: 'FirstName2',
        // lastName: 'LastName2',
        // dateOfBirth: new Date('1991-02-02'),
        // gender: 'Female',
        // medicalHistory: ['Diabetes'],
        // address: 'Address2',
        // isActive: true
//     },
//     {
//         username: 'user10',
//         password: 'password10',
//         email: 'user10@example.com',
//         phoneNumber: 1234567899,
//         firstName: 'FirstName10',
//         lastName: 'LastName10',
//         dateOfBirth: new Date('1999-10-10'),
//         gender: 'Female',
//         medicalHistory: ['Hypertension'],
//         address: 'Address10',
//         isActive: true
//     }
// ];



// User Model:

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },

    password: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true,
        // validate: ... // validasyon işlemini pre(save) yapıyor.
    },

    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },

    phoneNumber:{
        type: Number
    },

    firstName: {
        type: String,
        trim: true,
      
    },

    lastName: {
        type: String,
        trim: true,
      
    },

    dateOfBirth:{
        type:Date,
      
    },

    gender:{
        type: String,
        
    },

    medicalHistory:{
        type:[String],
        trim: true,
    },

    address:{
        type:String,
        trim:true
    },

    isActive: {
        type: Boolean,
        default: true,
    }
}, {
    collection: 'users',
    timestamps: true
})

/* ------------------------------------------------------- */
// https://mongoosejs.com/docs/middleware.html

// const passwordEncrypt = require('../helpers/passwordEncrypt')

// // "save" olayı "updateOne" için çalışmaz.
// UserSchema.pre(['save', 'updateOne'], function (next) {
//     // console.log('pre(save,update) run.')
//     // console.log(this)

//     // get data from "this" or "this._update"
//     const data = this?._update || this

//     // email@domain.com
//     const isEmailValidated = data.email ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) : true

//     if (isEmailValidated) {

//         // console.log('Email OK')

//         if (data?.password) {

//             const isPasswordValidated = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(data.password)

//             if (isPasswordValidated) {

//                 // console.log('Password OK')

//                 data.password = passwordEncrypt(data.password)

//                 if (this?._update) {

//                     this._update = data
//                     // this._update.password = data.password 

//                 } else {
//                     // this = data // izin vermiyor.
//                     this.password = data.password
//                 }

//                 //? ShortHand:
//                 // // save:
//                 // this.password = data.password = passwordEncrypt(data.password)
//                 // // update:
//                 // this._update = data


//             } else {
//                 next(new Error('Password is not validated.'))
//             }
//         }
//         next()

//     } else {
//         next(new Error('Email is not validated.'))
//     }
// })

/* ------------------------------------------------------- */
// Exports:
module.exports = mongoose.model('User', UserSchema)