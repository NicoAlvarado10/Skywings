import { ServicesCard } from '../../components/ServicesCard';
import styles from './Services.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Services = () => {
  // Refs for inView detection
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  // InView hooks
  const isCard1InView = useInView(card1Ref, { once: true });
  const isCard2InView = useInView(card2Ref, { once: true });
  const isCard3InView = useInView(card3Ref, { once: true });

  return (
    <section className={styles.services}>
      <div className={styles.services__text}>
        <h2 className={styles.services__title}>Discover The World From Above</h2>
        <p className={styles.services__paragraph}>
          Experience Breathtaking Views and Unique Perspectives
        </p>
      </div>
      <div className={styles.services__grid}>
        <motion.div
          ref={card1Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isCard1InView ? 1 : 0, y: isCard1InView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <ServicesCard
            icon={'ri-camera-lens-line'}
            title={'Aerial Cityscapes'}
            description={"Witness the architectural marvels and bustling streets from bird's-eye view, offering a unique perspective."}
          />
        </motion.div>

        <motion.div
          ref={card2Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isCard2InView ? 1 : 0, y: isCard2InView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ServicesCard
            icon={'ri-ship-line'}
            title={'Coastal Wonders'}
            description={'Fly over pristine coastlines and turquoise waters, revealing hidden coves and vibrant coral reefs.'}
          />
        </motion.div>

        <motion.div
          ref={card3Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isCard3InView ? 1 : 0, y: isCard3InView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <ServicesCard
            icon={'ri-landscape-line'}
            title={'Historic Landmarks'}
            description={"Observe the grandeur of ancient castles and other significant sites in a way that ground tours can't offer."}
          />
        </motion.div>
      </div>
    </section>
  );
};
