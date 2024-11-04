import React from 'react';
import s from '../../../styles/Pages/Subscription/popup.module.scss';

interface PopupDetailsProps {
  onClose: () => void;
  packageDetails: {
    title: string;
    price: string;
    duration: string;
    description: string;
  };
}

const PopupDetails: React.FC<PopupDetailsProps> = ({ onClose, packageDetails }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.popupOverlay} onClick={handleOverlayClick}>
      <div className={s.popupContent}>
        <button className={s.closeButton} onClick={onClose}>×</button>
        <h2 className={s.title}>{packageDetails.title}</h2>
        <p className={s.price}>{packageDetails.price} {packageDetails.duration}</p>
        <p className={s.description}>{packageDetails.description}</p>
      </div>
    </div>
  );
};

export default PopupDetails;
