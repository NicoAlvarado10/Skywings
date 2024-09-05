import {HamburgerBtn} from './../../components/hamburgerBtn/HamburgerBtn';
import styles from './Header.module.css'
import { useState, useEffect } from 'react';
export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.querySelector(`.${styles.nav__menu}`);
            const menuToggle = document.querySelector(`.${styles.menu_toggle}`);
            if (isMenuOpen && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);
return (
<header className={styles.header} id='HOME'>
    <nav className={styles.header__nav}>
        <a href="#" className={styles.logo}>Skywings</a>
        <ul className={`${styles.nav__menu} ${isMenuOpen ? styles.active : ''}`}>
            <li><a className={styles.nav__link} href="#HOME">HOME</a></li>
            <li><a className={styles.nav__link} href="#ABOUT">ABOUT</a></li>
            <li><a className={styles.nav__link} href="#TOUR">TOUR</a></li>
            <li><a className={styles.nav__link} href="#PACKAGE">PACKAGE</a></li>
            <li><a className={styles.nav__link} href="#CONTACT">CONTACT</a></li>
            <a href="#" className={styles.nav__btn}>BOOK TRIP</a>
        </ul>
        <div className={styles.menu_toggle} onClick={toggleMenu}>
        <HamburgerBtn/>
        </div>
        
    </nav>
    <section className={styles.header__hero}>
        <div className={styles.hero__texts}>
            <p className={styles.header__subtitle}>ELEVATE YOUR TRAVEL JOURNEY</p>
            <h1 className={styles.header__title}>Experience <br /> The Magic Of <br />Flight!</h1>
            <div className={styles.hero__action}>
                <a href="#" className={styles.header__btn}>Book A Trip Now</a>

                <a className={styles.btn__secondary} href="#"><i className="ri-play-fill"></i></a>
            </div>

        </div>
        <div className={styles.hero__img}>
            <img src="/header.png" alt="image-avion" className={styles.img_avion} />
        </div>
    </section>
</header>

)
}