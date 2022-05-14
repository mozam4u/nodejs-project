const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique:true
    },
    mobile: {
        required: true,
        type: Number
    },
    rollnumber: {
        required: true,
        type: Number,
        unique:true,
    }, 
    address: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('MozammilCrudData', dataSchema)