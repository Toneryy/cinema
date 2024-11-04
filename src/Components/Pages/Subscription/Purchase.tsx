import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import m from "../../../styles/App.module.scss";
import s from "../../../styles/Pages/Subscription/purchase.module.scss";

const Purchase: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const packageDetails = location.state?.packageDetails;
  const packageType = location.state?.packageType;

  return (
    <main className={m.main}>
      <section className={s.purchaseContainer}>
        <div className={s.header}>
          <h1 className={s.title}>Complete Your Purchase</h1>
          <button className={s.backButton} onClick={() => navigate(-1)}>Back</button>
          <p className={s.subtitle}>Review and confirm your selected subscription package</p>
        </div>

        {packageDetails ? (
          <div className={s.packageDetails}>
            <h2 className={s.packageTitle}>{packageDetails.title}</h2>
            <p className={s.packagePrice}>{packageDetails.price} {packageDetails.duration}</p>
            <p className={s.packageDescription}>{packageDetails.description}</p>
            <p className={s.packageType}>Package Type: {packageType}</p>
            <p className={s.note}>*10% cashback on PayPal payments</p>
          </div>
        ) : (
          <p>No package selected. Please go back and choose a package.</p>
        )}

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
