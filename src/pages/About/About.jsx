import { Destination } from "../../components/Destination";
import styles from './About.module.css';
export const About = () => {
  return (
    <section className={styles.about} id="ABOUT">
        <div className={styles.about__texts}>
            <h2 className={styles.about__title}>Popular Destination</h2>
            <p className={styles.about__paragraph}>Discover the Most Loved Destinations Around the Globe</p>
        </div>
        <div className={styles.about__grid}>
            <Destination 
              imageSrc={'/destination-1.jpg'}
              title={"Tradition and Futurism"}
              paisCiudad={"New York City, USA"}
              rating={"4.7"} 
            />
            <Destination
              imageSrc={'/destination-2.jpg'}
              title={'The City of Lights'}
              paisCiudad={'Paris, France'}
              rating={'4.5'}
            />
            <Destination
              imageSrc={'/destination-3.jpg'}
              title={'Island of the Gods'}
              paisCiudad={'Bali, Indonesia'}
              rating={'4.8'}
            />
        </div>
    </section>
  )
}
