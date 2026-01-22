import { useCarousel } from "../../hooks/useCarousel";
import styles from "./Carousel.module.css";

const Carousel = ({ items, size = "medium" }) => {
  const { index, next, prev, goTo } = useCarousel({
    itemCount: items.length,
    interval: 5000,
  });

  return (
    <div className={`${styles.carousel} ${styles[size]}`}>
      <button 
        onClick={prev} 
        className={styles.arrow}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div className={styles.slide} key={i}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.indicators}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.indicator} ${i === index ? styles.active : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              aria-current={i === index ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>

      <button 
        onClick={next} 
        className={styles.arrow}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}

export default Carousel;