var mongoose = require('mongoose');

var memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    academicQualification: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

var member = module.exports = mongoose.model('member', memberSchema);
