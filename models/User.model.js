const { Schema, model } = require("mongoose");

const SchemaUser= Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true
    }
})

const User=model('User', SchemaUser);
module.exports = User;