const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminLoginSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const AdminLogin = mongoose.model('admin_login', adminLoginSchema);

module.exports = AdminLogin;
