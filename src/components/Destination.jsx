
import styles from './components.module.css';
export const Destination = ({imageSrc, title, paisCiudad, rating}) => {

return (
<article 
  className={styles.about__card}

  >
  <img src={imageSrc} alt="image-lugar" className={styles.card__img} />
  <div className={styles.description__content}>
    <div className={styles.card__description}>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__pais}>{paisCiudad}</p>

    </div>
    <div className={styles.card__rating}>
      <i className="ri-star-fill"></i>
      <span>{rating}</span>
    </div>

  </div>

</article>
)
}