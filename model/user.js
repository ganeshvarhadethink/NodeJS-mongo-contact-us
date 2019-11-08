var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let validator = require('validator');

var ContactusSchema = new Schema({
    talkAbout: {
        type: String,
        required: true,
        trim: true
    },
    timeFrame: {
        type: String,
        trim: true,
        lowercase: true
    },
    projectType: {
        type: String,
        required: true,
        trim: true
    },
    budget: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    requester: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is Invalid')
            }
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 10
    },
    
});


// Export the model

var user = module.exports = mongoose.model('Contactus', ContactusSchema);
module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}