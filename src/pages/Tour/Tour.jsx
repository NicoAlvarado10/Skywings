import styles from './Tour.module.css'
import { TourCard } from "../../components/TourCard";

export const Tour = () => {
  return (
    <section className={styles.tour}>
        <div className={styles.tour__text}>
            <h2 className={styles.tour__title}>Journey To The Sky Made Simple!</h2>
            <p className={styles.tour__paragraph}>Effortless Planning for Your Next Adventure</p>
        </div>
        <div className={styles.tour__grid}>
            <TourCard
                icon_bg={'ri-bookmark-3-line'}
                icon={'ri-bookmark-3-line'}
                title={'Seamless Booking Process'}
                articleTitle={'Easy Reservations, One Click Away'}
                articleParagraph={'From flights and accommodations to activities and transfers, everything you need is available at your fingertips, making travel planning effortless.'}
            />
            <TourCard
                icon_bg={'ri-landscape-fill'}
                icon={'ri-landscape-fill'}
                title={'Tailored Itineraries'}
                articleTitle={'Customized Plans Just for You'}
                articleParagraph={'Enjoy personalized travel plans designed to match your preferences and interests. Whether you seek adventure or cultural immersion, our tailored itineraries ensure your journey is uniquely yours.'}
            />
            <TourCard
                icon_bg={'ri-map-2-line'}
                icon={'ri-map-2-line'}
                title={'Expert Local Insights'}
                articleTitle={'Insider Tips and Recommendations'}
                articleParagraph={'We provide curated recommendations for dining, sightseeing, and hidden gems, so you can experience each destination like a local.'}
            />
        </div>
    </section>
  )
}
