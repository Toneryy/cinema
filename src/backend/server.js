const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Используйте нужный вам сервис (например, Gmail)
  auth: {
    user: 'your-email@gmail.com', // Ваш email
    pass: 'your-email-password', // Ваш пароль приложения или обычный пароль
  },
});

app.post('/send-email', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com', // Ваш email
    to: 'daniil.samsung.tab2@gmail.com', // Ваш email для получения
    subject: 'New Consultation Request',
    text: `Email: ${email} wants to get consultation about the subscription.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
