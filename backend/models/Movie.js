// models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    // Добавьте другие поля, необходимые для вашей модели фильма
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
