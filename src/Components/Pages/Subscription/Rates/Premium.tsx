import React, { useState } from "react";
import s from "../../../../styles/Pages/Subscription/rate.module.scss";
import m from "../../../../styles/App.module.scss";
import FAQ from "../../../FAQ";
import Hero from "../../../Hero";
import { useNavigate } from "react-router-dom";
import PopupDetails from "../PopapDetails";

type PackageDetail = {
  title: string;
  price: string;
  duration: string;
  description: string;
};

const Premium: React.FC = () => {
  const [selectedRate, setSelectedRate] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const packages: PackageDetail[] = [
    { title: "30 Day - All Device", price: "$12.99", duration: "/month", description: "For PayPal payment promo: Receive a 10% cashback." },
    { title: "1 Year - All Device", price: "$96.99", duration: "/year", description: "For PayPal payment promo: Receive a 10% cashback." },
    { title: "30 Day - Only for Phone & Tablet", price: "$9.99", duration: "/month", description: "For PayPal payment promo: Receive a 10% cashback." },
    { title: "1 Year - Only for Phone & Tablet", price: "$58.99", duration: "/year", description: "For PayPal payment promo: Receive a 10% cashback." }
  ];

  const packageDetails = selectedRate !== null ? packages[selectedRate] : null;

  const handleRateSelect = (index: number) => {
    setSelectedRate(index);
  };

  const handlePackageSelect = () => {
    if (packageDetails) {
      navigate('/subscription/purchase', { state: { packageDetails } });
    }
  };

  const handleShowDetails = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className={m.main}>
      <section className={s.intro}>
        <h1 className={s.title}>Premium Subscription</h1>
        <h4 className={s.subtitle}>
          Discover our premium subscription options, offering even more features tailored for you.
        </h4>
        <div className={s.buttonContainer}>
          <button className={s.selectPackage} onClick={handlePackageSelect}>Select Package</button>
          <button className={s.showDetail} onClick={handleShowDetails}>Show Detail Package</button>
        </div>
      </section>
      <section className={s.rateContainer}>
        {packages.map((rate, index) => (
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
                {rate.description}
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

export default Premium;
