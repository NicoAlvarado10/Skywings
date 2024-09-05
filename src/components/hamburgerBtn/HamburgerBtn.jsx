import styles from './HamburgerBtn.module.css';
import { useState } from 'react';

export const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles['hamburger-menu']} ${isOpen ? styles.open : ''}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
