import React from "react";
import m from "../../../styles/App.module.scss";
import s from "../../../styles/Pages/Subscription/purchase.module.scss";

const Purchase: React.FC = () => {
  return (
    <main className={m.main}>
      <section className={s.purchaseContainer}>
        <div className={s.header}>
          <h1 className={s.title}>Complete Your Purchase</h1>
          <p className={s.subtitle}>Review and confirm your selected subscription package</p>
        </div>

        <div className={s.packageDetails}>
          <h2 className={s.packageTitle}>Basic Subscription - 30 Days</h2>
          <p className={s.packageDescription}>Access on all devices with a monthly payment of $8.99</p>
          <p className={s.note}>*10% cashback on PayPal payments</p>
        </div>

        <div className={s.paymentSection}>
          <h3 className={s.paymentTitle}>Choose Payment Method</h3>
          <button className={`${s.paymentButton} ${s.paypal}`}>Pay with PayPal</button>
          <button className={`${s.paymentButton} ${s.creditCard}`}>Pay with Credit Card</button>
        </div>

        <div className={s.footer}>
          <button className={s.confirmButton}>Confirm Purchase</button>
        </div>
      </section>
    </main>
  );
};

export default Purchase;
