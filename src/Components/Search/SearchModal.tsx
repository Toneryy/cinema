import React, { useEffect, useRef } from 'react';
import s from '../../styles/Search/searchModal.module.css'; // Импортируй стили

const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Закрытие модального окна при клике вне области модального окна
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`${s.searchModal} ${isOpen ? s.active : ''}`}>
      <div className={s.searchContent} ref={modalRef}>
        <button onClick={onClose} className={s.closeButton}>✖</button>
        <input type="text" placeholder="Search for movies..." className={s.searchInput} />
        <button className={s.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default SearchModal;
