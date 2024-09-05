import styles from './components.module.css'

export const CarruselCard = ({opinion, imageSrc, nombre,puesto}) => {
  return (  
        <article className={styles.carousel_item}>
            <div className={styles.carousel__star}>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
            </div>
            <div>
                <p className={styles.carousel__paragraph}>{opinion}</p>    
            </div>
            <div className={styles.carousel__descp}>
                <img className={styles.carousel__img} src={imageSrc} alt="image-cliente" />
                <h4 className={styles.carousel__nombre}>{nombre}<br /><span>{puesto}</span></h4>
            </div>
        </article>
  );
};


