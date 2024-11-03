import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import s from "../../../../styles/Pages/Subscription/rate.module.scss";
import m from "../../../../styles/App.module.scss";

const Ultimate: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const navigateToPayment = () => {
    navigate("/payment", { state: { packageName: "Ultimate Subscription" } });
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <main className={m.main}>
      <section className={s.intro}>
        <h1 className={s.title}>Ultimate Subscription</h1>
        <h4 className={s.subtitle}>
          Dive into our ultimate package, perfect for movie enthusiasts who demand the best.
        </h4>
        <div className={s.buttonContainer}>
          <button className={s.selectPackage} onClick={navigateToPayment}>
            Select Package
          </button>
          <button className={s.showDetail} onClick={handleShowDetails}>
            Show Detail Package
          </button>
        </div>
      </section>
      <section className={s.rateContainer}>
        <div className={s.rateItem}>
          <div className={s.itemContainer}>
            <h3 className={s.itemTitle}>30 Day - All Device</h3>
            <div className={s.price}>
              <h2 className={s.amount}>$12.99</h2>
              <h4 className={s.duration}>/month</h4>
            </div>
            <p className={s.description}>
              Premium access with added features and a 10% PayPal cashback offer.
            </p>
          </div>
        </div>
        <div className={s.rateItem}>
          <div className={s.itemContainer}>
            <h3 className={s.itemTitle}>1 Year - All Device</h3>
            <div className={s.price}>
              <h2 className={s.amount}>$99.99</h2>
              <h4 className={s.duration}>/year</h4>
            </div>
            <p className={s.description}>
              Enjoy uninterrupted streaming and early access to new movies and exclusive content.
            </p>
          </div>
        </div>
      </section>

      {showDetails && (
        <div className={s.popup}>
          <div className={s.popupContent}>
            <h2>Ultimate Package Details</h2>
            <p>The ultimate movie experience with all the premium benefits, designed for the passionate movie buff.</p>
            <button onClick={() => setShowDetails(false)}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Ultimate;
