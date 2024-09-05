import styles from './components.module.css'

export const ServicesCard = ({icon,  title, description}) => {
  return (
    <article className={styles.services__card}>
        <span><i className={icon}></i></span>
        <h3>{title}</h3>
        <p>{description}</p>
    </article>
  )
}
