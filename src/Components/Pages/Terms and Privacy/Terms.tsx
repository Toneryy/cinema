import React from 'react';
import s from '../../../styles/Pages/Terms and Privacy/termsAndPrivacy.module.css';

const Terms: React.FC = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Terms and Conditions</h1>
      <p className={s.description}>
        Welcome to Mostream! These terms and conditions outline the rules and regulations for the use of Mostream's services.
      </p>
      <h2 className={s.subtitle}>1. Introduction</h2>
      <p className={s.description}>
        By accessing this website we assume you accept these terms and conditions. Do not continue to use Mostream if you do not agree to take all of the terms and conditions stated on this page.
      </p>
      <h2 className={s.subtitle}>2. License</h2>
      <p className={s.description}>
        Unless otherwise stated, Mostream and/or its licensors own the intellectual property rights for all material on Mostream. All intellectual property rights are reserved.
      </p>
      <h2 className={s.subtitle}>3. User Obligations</h2>
      <p className={s.description}>
        Users agree to use the service for lawful purposes only. They are prohibited from using the service in a manner that could damage, disable, or impair the service.
      </p>
      <h2 className={s.subtitle}>4. Changes to Terms</h2>
      <p className={s.description}>
        We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page.
      </p>
      <h2 className={s.subtitle}>5. Contact Us</h2>
      <p className={s.description}>
        If you have any questions about these Terms, please contact us.
      </p>
    </div>
  );
};

export default Terms;
