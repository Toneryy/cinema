const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Обработчик GET для /api/auth
router.get('/', (req, res) => {
    res.send('Маршрут аутентификации доступен. Используйте /register для регистрации и /login для входа.');
});

// Регистрация нового пользователя
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    console.log('Запрос на регистрацию:', req.body); // Отладочное сообщение

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        console.error('Пользователь уже существует:', email);
        return res.status(400).json({ message: 'Пользователь уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        password: hashedPassword,
    });

    try {
        await user.save();
        console.log('Пользователь зарегистрирован:', user);
        res.status(201).json({ message: 'Пользователь зарегистрирован' });
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        res.status(500).json({ message: 'Ошибка при регистрации' });
    }
});

// Логин пользователя
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Неверные учетные данные' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Неверные учетные данные' });
    }

    res.status(200).json({ message: 'Успешный вход' });
});

module.exports = router;
