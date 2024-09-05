import styles from './components.module.css';
export const TourCard = ({icon_bg, icon, title, articleTitle, articleParagraph}) => {
  return (
    <div className={styles.tour__card}>
        <div className={styles.tour__bg}>
            <span><i className={icon_bg}></i></span>
            <h4 className={styles.card__title}>{title}</h4>
        </div>
        <article className={styles.card__content}>
        <span><i className={icon}></i></span>
        <h3 className={styles.content__title}>{articleTitle}</h3>
        <p className={styles.content__paragraph}>{articleParagraph}</p>
        </article>
    </div>
  )
}
