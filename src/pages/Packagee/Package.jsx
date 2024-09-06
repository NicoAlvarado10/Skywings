import styles from './Package.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Package = () => {
  // Refs for inView detection
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const linkRef = useRef(null);

  // InView hooks
  const isImgInView = useInView(imgRef, { once: true });
  const isTitleInView = useInView(titleRef, { once: true });
  const isParagraph1InView = useInView(paragraph1Ref, { once: true });
  const isParagraph2InView = useInView(paragraph2Ref, { once: true });
  const isLinkInView = useInView(linkRef, { once: true });

  return (
    <section className={styles.package}>
      <motion.div
        ref={imgRef}
        className={styles.package__img}
        initial={{ opacity: 0 }}
        animate={{ opacity: isImgInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/showcase.jpg" alt="image-niña" />
      </motion.div>
      <div className={styles.package__texts}>
        <motion.h2
          ref={titleRef}
          className={styles.package__title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isTitleInView ? 1 : 0, y: isTitleInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          UNLEASH WANDERLUST WITH SKYWINGS
        </motion.h2>
        <motion.p
          ref={paragraph1Ref}
          className={styles.package__paragraph}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isParagraph1InView ? 1 : 0, y: isParagraph1InView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Embark on a journey like no other with Skywings, where your travel dreams come to life. Our mission is to inspire and facilitate your adventures, whether you seek the vibrant energy of bustling cityscapes, the serene beauty of pristine beaches, or the captivating history of ancient landmarks. At Skywings, we provide expertly curated destinations and personalized itineraries, ensuring that every trip is tailored to your unique preferences. Discover hidden gems, immerse yourself in diverse cultures, and create unforgettable memories that will last a lifetime.
        </motion.p>
        <motion.p
          ref={paragraph2Ref}
          className={styles.package__paragraph}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isParagraph2InView ? 1 : 0, y: isParagraph2InView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          With Skywings as your ultimate travel companion, exploring the wonders of the world has never been easier. Our insider tips and local insights give you the tools to navigate new places with confidence and excitement. From the moment you start planning to the day you return home, we are dedicated to making your travel experience seamless and enriching.
        </motion.p>
        <motion.div
          ref={linkRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLinkInView ? 1 : 0, y: isLinkInView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a className={styles.package__link} href="#">Book A Flight Now <i className="ri-arrow-right-line"></i></a>
        </motion.div>
      </div>
    </section>
  );
};
