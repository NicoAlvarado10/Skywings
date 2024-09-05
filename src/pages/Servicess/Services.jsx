import { ServicesCard } from '../../components/ServicesCard'
import styles from './Services.module.css'

export const Services = () => {
  return (
    <section className={styles.services}>
        <div className={styles.services__text}>
            <h2 className={styles.services__title}>Discover The World From Above</h2>
            <p className={styles.services__paragraph}>
            Experience Breathtaking Views and Unique Perspectives</p>
        </div>
        <div className={styles.services__grid}>
            <ServicesCard
                icon={'ri-camera-lens-line'}
                title={'Aerial Cityscapes'}
                description={"Witness the architectural marvels and bustling streets from bird's-eye view, offering a unique perspective."}
            />
            <ServicesCard
                icon={'ri-ship-line'}
                title={'Coastal Wonders'}
                description={'Fly over pristine coastlines and turquoise waters, revealing hidden coves and vibrant coral reefs.'}
            />
            <ServicesCard
                icon={'ri-landscape-line'}
                title={'Historic Landmarks'}
                description={"Observe the grandeur of ancient castles and other significant sites in a way that ground tours can't offer."}
            />
        </div>
    </section>
  )
}
