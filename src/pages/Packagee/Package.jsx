import styles from './Package.module.css'

export const Package = () => {
  return (
    <section className={styles.package}>
        <div className={styles.package__img}>
            <img src="/showcase.jpg" alt="image-niña" />
        </div>
        <div className={styles.package__texts}>
            <h2 className={styles.package__title}>UNLEASH WANDERLUST WITH SKYWINGS</h2>
            <p className={styles.package__paragraph}>Embark on a journey like no other with Skywings, where your travel dreams come to life. Our mission is to inspire and facilitate your adventures, whether you seek the vibrant energy of bustling cityscapes, the serene beauty of pristine beaches, or the captivating history of ancient landmarks. At Skywings, we provide expertly curated destinations and personalized itineraries, ensuring that every trip is tailored to your unique preferences. Discover hidden gems, immerse yourself in diverse cultures, and create unforgettable memories that will last a lifetime.</p> <br />
            <p className={styles.package__paragraph}>With Skywings as your ultimate travel companion, exploring the wonders of the world has never been easier. Our insider tips and local insights give you the tools to navigate new places with confidence and excitement. From the moment you start planning to the day you return home, we are dedicated to making your travel experience seamless and enriching.</p>
            
            <div>
                <a className={styles.package__link} href="#">Book A Flight Now <i className="ri-arrow-right-line"></i></a>
            </div>

        </div>
    </section>
  )
}
