import { useEffect, useRef } from 'react';
import { CarruselCard} from "../../components/CarruselCard";
import styles from './Testimonios.module.css'

export const Testimonios = () => {

    const carouselRef = useRef(null);

    useEffect(() => {
      const carousel = carouselRef.current;
      const firstChild = carousel.children[0];
  
      const clone = firstChild.cloneNode(true);
      carousel.appendChild(clone);
  
      const scrollSpeed = 0.5; // Controla la velocidad del scroll
  
      let scrollPosition = 0;
      const scroll = () => {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= firstChild.offsetWidth) {
          scrollPosition = 0;
        }
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
        requestAnimationFrame(scroll);
      };
  
      scroll();
    }, []);
  
  return (
    <section className={styles.testimonios}>
        <div className={styles.testimonios__text}>
            <h2 className={styles.testimonios__title}>Loved By Over Thousand Travelers</h2>
            <p className={styles.testimonios__paragraph}>Discover the stories of wanderlust and cherished memories through the eyes of our valued clients.</p>
        </div>
        <div className={styles.carousel}>
      <div className={styles.carousel_content} ref={carouselRef}>
        
       <CarruselCard
        imageSrc={'/client-1.jpg'}
          nombre={'David Patel'}
          puesto={'Business Executive'}
          opinion={"Finding a balance between work and travel can be challenging, but Skywings made it effortless. Their efficient planning and excellent recommendations helped me maximize my downtime and enjoy every moment of my trip. I look forward to working with them again on future travels." }
          />
       <CarruselCard
       imageSrc={'/client-2.jpg'}
        nombre={'John Adams'}
        puesto={'Travel Blogger'}
        opinion={"Skywings has completely transformed my travel experience. From finding hidden gems in bustling cities to discovering serene retreats off the beaten path, every detail was thoughtfully arranged. I can't recommend Skywings enough for anyone looking to elevate their travel experience!"}
         />
       <CarruselCard
       imageSrc={'/client-3.jpg'}
       nombre={'Emily Thompson'}
       puesto={'Adventure Enthusiast'}
       opinion={"My recent adventure with Skywings was nothing short of spectacular. The personalized itineraries and recommendations they provided led me to extraordinary locations that I would never have found on my own. I am already planning my next adventure with them!"}
       />
       <CarruselCard
       imageSrc={'/client-4.jpg'}
       nombre={'Sarah Lee'}
       puesto={'Cultural Historian'}
       opinion={"Skywings offered a transformative experience for my research into historical landmarks. The unique aerial perspectives and provided a new level of appreciation and insight into the sites I studied. I highly recommended their services to fellow historians and cultural enthusiasts."}
       />

      </div>
    </div>
    </section>
  )
}
