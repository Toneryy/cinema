// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Уникальное поле для электронной почты
    },
    password: {
        type: String,
        required: true,
    },
    // Убедитесь, что у вас нет поля username, если оно не нужно
});

const User = mongoose.model('User', userSchema);

module.exports = User;
