var mongoose = require('mongoose');

var bdMemberSchema = mongoose.Schema({
    name: {
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
    bloodGroup: {
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

var bdMember = module.exports = mongoose.model('bdMember', bdMemberSchema);
