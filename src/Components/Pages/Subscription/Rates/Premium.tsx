import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import s from "../../../../styles/Pages/Subscription/rate.module.scss";
import m from "../../../../styles/App.module.scss";

const Premium: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const navigateToPayment = () => {
    navigate("/payment", { state: { packageName: "Premium Subscription" } });
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <main className={m.main}>
      <section className={s.intro}>
        <h1 className={s.title}>Premium Subscription</h1>
        <h4 className={s.subtitle}>
          Explore our premium package designed for those seeking the ultimate movie-watching experience across all devices.
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
              <h2 className={s.amount}>$10.99</h2>
              <h4 className={s.duration}>/month</h4>
            </div>
            <p className={s.description}>
              Enjoy unlimited access to our vast movie library with a 10% cashback for PayPal payments.
            </p>
          </div>
        </div>
        <div className={s.rateItem}>
          <div className={s.itemContainer}>
            <h3 className={s.itemTitle}>1 Year - All Device</h3>
            <div className={s.price}>
              <h2 className={s.amount}>$89.99</h2>
              <h4 className={s.duration}>/year</h4>
            </div>
            <p className={s.description}>
              Save more with an annual subscription and get exclusive access to new releases.
            </p>
          </div>
        </div>
      </section>

      {showDetails && (
        <div className={s.popup}>
          <div className={s.popupContent}>
            <h2>Premium Package Details</h2>
            <p>This package offers unrestricted access across all devices, tailored for avid movie fans. Special discounts available for long-term subscriptions.</p>
            <button onClick={() => setShowDetails(false)}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Premium;
