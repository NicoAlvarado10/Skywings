import styles from './Estadisticas.module.css'

export const Estadisticas = () => {
  return (
    <section className={styles.estadisticas}>
        <div>
            <span className={styles.estadistica__number}>10+</span> 
            <span className={styles.estadistica__descp}>Years Experience</span>
        </div>
        <div>
            <span className={styles.estadistica__number}>12K</span>
            <span className={styles.estadistica__descp}>Happy Clients</span>
        </div>
        <div>
            <span className={styles.estadistica__number}>4.8</span>
            <span className={styles.estadistica__descp}>Overall Ratings</span>
        </div>
    </section>
  )
}
