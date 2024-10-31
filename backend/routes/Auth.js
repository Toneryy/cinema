// routes/Auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Movie = require("../models/Movie");
const mongoose = require("mongoose"); // Подключаем mongoose

const router = express.Router();

const JWT_SECRET = "your-secret-key"; // Секретный ключ для подписи JWT

// Обработчик GET для /api/auth
router.get("/", (req, res) => {
  res.send(
    "Маршрут аутентификации доступен. Используйте /register для регистрации и /login для входа."
  );
});

// Регистрация нового пользователя
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  console.log("Запрос на регистрацию:", req.body); // Отладочное сообщение

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    console.error("Пользователь уже существует:", email);
    return res.status(400).json({ message: "Пользователь уже существует" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
    watchlist: [], // Инициализация списка наблюдения
  });

  try {
    await user.save();
    console.log("Пользователь зарегистрирован:", user);
    res.status(201).json({ message: "Пользователь зарегистрирован" });
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    res.status(500).json({ message: "Ошибка при регистрации" });
  }
});

// Логин пользователя
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Неверные учетные данные" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Неверные учетные данные" });
  }

  // Генерация JWT токена
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ message: "Успешный вход", token }); // Отправляем токен клиенту
});

// Middleware для проверки токена
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Received token:", token); // Логирование токена
  if (!token) {
    return res.status(403).send("Токен отсутствует");
  }

  jwt.verify(token.replace("Bearer ", ""), JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error("Invalid token:", err); // Логирование ошибки
      return res.status(401).send("Токен недействителен");
    }
    req.userId = decoded.userId; // Сохраняем ID пользователя
    next();
  });
};

// Получение профиля пользователя
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password"); // Не возвращаем пароль
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// Пример маршрута для получения фильмов
router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Ошибка при получении фильмов" });
  }
});

// Обработчик для добавления в watchlist
router.post("/watchlist", async (req, res) => {
  const { movieId } = req.body;
  const token = req.headers.authorization;

  console.log("Запрос к /watchlist:", movieId, token);

  if (!token) {
    console.error("Токен отсутствует");
    return res.status(401).json({ message: "Токен отсутствует" });
  }

  try {
    // Декодируем токен и получаем ID пользователя
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    const userId = decoded.userId;

    const user = await User.findById(userId);
    if (!user) {
      console.error("Пользователь не найден");
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    // Проверка, что movieId передан
    if (!movieId) {
      console.error("movieId не передан");
      return res.status(400).json({ message: "movieId не передан" });
    }

    // Добавляем movieId в watchlist, если он еще не добавлен
    if (!user.watchlist.includes(movieId)) {
      user.watchlist.push(movieId);
      await user.save();
      console.log("Фильм добавлен в Watch List");
      res.status(200).json({ message: "Фильм добавлен в Watch List" });
    } else {
      console.log("Фильм уже в списке");
      res.status(400).json({ message: "Фильм уже в списке" });
    }
  } catch (error) {
    console.error("Ошибка при добавлении в Watch List:", error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Неверный токен" });
    } else if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Сессия истекла. Пожалуйста, войдите снова." });
    }
    console.error("Ошибка сервера:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// Удаление фильма из watchlist
router.delete("/watchlist/remove/:id", verifyToken, async (req, res) => {
  const movieId = req.params.id;

  console.log("Запрос на удаление фильма с ID:", movieId);

  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    // Проверка, существует ли фильм в watchlist
    const movieIndex = user.watchlist.indexOf(movieId);
    if (movieIndex === -1) {
      console.log(
        `Фильм с ID ${movieId} не найден в списке наблюдения для пользователя ${req.userId}`
      );
      return res
        .status(404)
        .json({ message: "Фильм не найден в списке наблюдения" });
    }

    // Удаление фильма из watchlist
    user.watchlist.splice(movieIndex, 1);
    await user.save();

    console.log("Фильм удален из Watch List");
    res
      .status(200)
      .json({ message: "Фильм успешно удален из списка наблюдения" });
  } catch (error) {
    console.error("Ошибка сервера:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// Маршрут для выхода из системы
router.post("/logout", (req, res) => {
  res.status(200).json({ message: "Вы вышли из системы" });
});

module.exports = router;
