const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // CORS для взаимодействия фронта с сервом
const authRoutes = require('./routes/Auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Активация CORS
app.use(express.json()); // Для парсинга JSON-данных

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Обработчик корневого маршрута
app.get('/', (req, res) => {
    res.send('Сервер работает. Перейдите к /api/auth для регистрации и входа.');
});

// Использование маршрутов
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
