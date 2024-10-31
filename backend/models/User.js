// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    watchlist: {
        type: [Number], // Храним массив идентификаторов фильмов
        default: [],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
