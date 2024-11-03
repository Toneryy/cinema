import React, { useState } from "react";
import s from "../../../../styles/Pages/Subscription/rate.module.scss";
import m from "../../../../styles/App.module.scss";
import FAQ from "../../../FAQ";
import Hero from "../../../Hero";
import { useNavigate } from "react-router-dom";
import { navigateToLink } from "../../../../Logic/navigateActions";
import PopupDetails from "../PopapDetails";

const Basic: React.FC = () => {
  const [selectedRate, setSelectedRate] = useState<number | null>(null); // Отслеживание выбранного тарифа
  const [showPopup, setShowPopup] = useState(false); // Состояние для отображения попапа
  const navigate = useNavigate();

  const handleRateSelect = (index: number) => {
    setSelectedRate(index);
  };

  const handlePackageSelect = () => {
    navigateToLink(navigate, '/subscription/purchase');
  };

  const handleShowDetails = () => {
    setShowPopup(true); // Открываем попап
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Закрываем попап
  };

  const packageDetails = selectedRate !== null ? [
    { title: "30 Day - All Device", price: "$8.99", duration: "/month", description: "For PayPal payment promo: Receive a 10% cashback." },
    { title: "1 Year - All Device", price: "$76.99", duration: "/year", description: "For PayPal payment promo: Receive a 10% cashback." },
    { title: "30 Day - Only for Phone & Tablet", price: "$5.99", duration: "/month", description: "For PayPal payment promo: Receive a 10% cashback." },
    { title: "1 Year - Only for Phone & Tablet", price: "$48.99", duration: "/year", description: "For PayPal payment promo: Receive a 10% cashback." }
  ][selectedRate] : null;

  return (
    <main className={m.main}>
      <section className={s.intro}>
        <h1 className={s.title}>Basic Subscription</h1>
        <h4 className={s.subtitle}>
          Delve into our extensive array of movie subscription pricing plans,
          each thoughtfully designed to cater to the distinct preferences.
        </h4>
        <div className={s.buttonContainer}>
          <button className={s.selectPackage} onClick={handlePackageSelect}>Select Package</button>
          <button className={s.showDetail} onClick={handleShowDetails}>Show Detail Package</button>
        </div>
      </section>
      <section className={s.rateContainer}>
        {[
          { title: "30 Day - All Device", price: "$8.99", duration: "/month" },
          { title: "1 Year - All Device", price: "$76.99", duration: "/year" },
          { title: "30 Day - Only for Phone & Tablet", price: "$5.99", duration: "/month" },
          { title: "1 Year - Only for Phone & Tablet", price: "$48.99", duration: "/year" }
        ].map((rate, index) => (
          <div
            key={index}
            className={`${s.rateItem} ${selectedRate === index ? s.selected : ""}`}
            onClick={() => handleRateSelect(index)}
          >
            <div className={s.itemContainer}>
              <h3 className={s.itemTitle}>{rate.title}</h3>
              <div className={s.price}>
                <h2 className={s.amount}>{rate.price}</h2>
                <h4 className={s.duration}>{rate.duration}</h4>
              </div>
              <p className={s.description}>
                For PayPal payment promo: Receive a 10% cashback.
              </p>
            </div>
          </div>
        ))}
      </section>
      <FAQ />
      <Hero />
      {showPopup && packageDetails && (
        <PopupDetails
          onClose={handleClosePopup}
          packageDetails={packageDetails}
        />
      )}
    </main>
  );
};

export default Basic;
