import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__grid}>
            <div className={styles.footer__card}>
                <h2 className={styles.footer__title}>Skywings</h2>
                <p className={styles.footer__paragraph}>Explore the world with ease and excitement through our comprehensive travel platform. Your journey begins here, where seamless planning meets unforgettable experiences.</p>
                <div className={styles.footer__redes}>
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-instagram-fill"></i></a>
                    <a href="#"><i className="ri-youtube-fill"></i></a>
                </div>

            </div>

            <div className={styles.footer__card}>

                <h3 className={styles.footer__title}>Quick Links</h3>
                <ul className={styles.footer__nav}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Flights</a></li>
                    <li><a href="#">Hotels</a></li>
                    <li><a href="#">Cruise</a></li>
                </ul>
            </div>

            <div className={styles.footer__card}>
            <h3 className={styles.footer__title}>Contact Us</h3>
                <ul className={styles.footer__nav}>
                    <li><a href="#"><i className="ri-phone-fill"></i> +91 9876543210</a></li>
                    <li><a href="#"><i className="ri-record-mail-line"></i>info@skywings</a></li>
                    <li><a href="#"><i className="ri-map-pin-2-fill"></i>New Delhi, India</a></li>
                </ul>
            </div>

            <div className={styles.footer__card}>
                <h3 className={styles.footer__title}>Subscribe</h3>
                <form>
                    <input type="text" placeholder="Enter your email" />
                    <button className={styles.footer__button} type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <footer className={styles.copyright}>
            <p>Copyright © 2024 Web Design Mastery. All rights reserved.</p>
        </footer>
    </footer>
  )
}
