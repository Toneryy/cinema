import React, { forwardRef, useState, useRef } from 'react';
import s from '../styles/hero.module.css';

const Hero = forwardRef<HTMLElement>((props, ref) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitTime = useRef<number | null>(null); // Для отслеживания времени последней отправки

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    const currentTime = Date.now();
    if (lastSubmitTime.current && currentTime - lastSubmitTime.current < 60000) {
      setMessage('Please wait a minute before submitting again.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    // Замените URL на свой endpoint для отправки данных
    try {
      await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: `${email} wants to get consultation about the subscription.`,
        }),
      });

      // Успешно отправлено
      setMessage('Your request has been sent successfully!');
      setEmail('');
      lastSubmitTime.current = Date.now(); // Сохраняем время последней отправки
    } catch (error) {
      setMessage('There was an error sending your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className={s.heroSection}>
      <div className={s.wrapper}>
        <h1 className={s.heroTitle}>Unlock Your Cinematic Experience! Ready to Dive Into Movie Magic</h1>
        <p className={s.heroSubtitle}>
          Embark on a journey beyond the ordinary and unlock the door to a world where every frame tells a story and every scene is a masterpiece.
        </p>
        <form onSubmit={handleSubmit} className={s.subscribeForm}>
          <input
            type="email"
            placeholder="Input email"
            className={s.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={s.subscribeButton} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
        {message && <p className={s.message}>{message}</p>} {/* Уведомление для пользователя */}
      </div>
    </section>
  );
});

export default Hero;
