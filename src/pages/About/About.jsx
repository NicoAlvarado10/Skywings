import { Destination } from "../../components/Destination";
import styles from './About.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export const About = () => {

     // Refs for inView detection
  const destination1Ref = useRef(null);
  const destination2Ref = useRef(null);
  const destination3Ref = useRef(null);

  // InView hooks
  const isDestination1InView = useInView(destination1Ref, { once: true });
  const isDestination2InView = useInView(destination2Ref, { once: true });
  const isDestination3InView = useInView(destination3Ref, { once: true });

  return (
    <section className={styles.about} id="ABOUT">
        <div className={styles.about__texts}>
            <h2 className={styles.about__title}>Popular Destination</h2>
            <p className={styles.about__paragraph}>Discover the Most Loved Destinations Around the Globe</p>
        </div>
        <div className={styles.about__grid}>
          <motion.div
            ref={destination1Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isDestination1InView ? 1 : 0, y: isDestination1InView ? 0 : 50 }}
            transition={{ duration: 0.5  }}>

            <Destination 
              
              imageSrc={'/destination-1.jpg'}
              title={"Tradition and Futurism"}
              paisCiudad={"New York City, USA"}
              rating={"4.7"}
            />

          </motion.div>

          <motion.div
            ref={destination2Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isDestination2InView ? 1 : 0, y: isDestination2InView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}>

            <Destination
              imageSrc={'/destination-2.jpg'}
              title={'The City of Lights'}
              paisCiudad={'Paris, France'}
              rating={'4.5'}
            />

            </motion.div>

            <motion.div
              ref={destination3Ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isDestination3InView ? 1 : 0, y: isDestination3InView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 1 }}>

            <Destination
              imageSrc={'/destination-3.jpg'}
              title={'Island of the Gods'}
              paisCiudad={'Bali, Indonesia'}
              rating={'4.8'}    
            />
              </motion.div>
        </div>
    </section>
  )
}
