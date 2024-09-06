import {HamburgerBtn} from './../../components/hamburgerBtn/HamburgerBtn';
import styles from './Header.module.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
                    <motion.p
                        className={styles.header__subtitle}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        ELEVATE YOUR TRAVEL JOURNEY
                    </motion.p>
                    <motion.h1
                        className={styles.header__title}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1  }}
                    >
                        Experience <br /> The Magic Of <br />Flight!
                    </motion.h1>
                    <motion.div
                        className={styles.hero__action}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <a href="#" className={styles.header__btn}>Book A Trip Now</a>
                        <a className={styles.btn__secondary} href="#"><i className="ri-play-fill"></i></a>
                    </motion.div>
                </div>
                <motion.div
                    className={styles.hero__img}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1  }}
                    
                    
                >
                    <img src="/header.png" alt="image-avion" className={styles.img_avion} />
                </motion.div>
    </section>
</header>

)
}