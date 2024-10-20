import React from 'react';
import s from '../../../styles/Pages/Terms and Privacy/termsAndPrivacy.module.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={s.container}>
      <h1>Privacy Policy</h1>
      <p>
        At Mostream, accessible from Mostream.com, your privacy is of utmost importance to us. This Privacy Policy document outlines the types of personal information that is collected and recorded by Mostream and how we use it.
      </p>
      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal information when you register for our services, contact us, or interact with our website.
      </p>
      <h2>2. Use of Information</h2>
      <p>
        We use the information we collect in various ways, including to provide, operate, and maintain our services, improve, personalize, and expand our services, and communicate with you.
      </p>
      <h2>3. Data Protection</h2>
      <p>
        We take the security of your personal information seriously and use reasonable administrative, technical, and physical security measures to protect it.
      </p>
      <h2>4. Changes to this Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
      <h2>5. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
