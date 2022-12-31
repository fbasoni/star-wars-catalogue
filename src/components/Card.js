import styles from './Card.module.css';
import { BsPlusSquareFill } from 'react-icons/bs'

const Card = ({children, onClick}) => {
  return (
    <div className={styles.movieCard}>
      <h1 className={styles.movieTitle}>{children.title}</h1>

      <div className={styles.infoBox}>
        <div className={styles.description}>{children.opening_crawl}</div>
      </div>
        <BsPlusSquareFill className={styles.plusSign} onClick={onClick}></BsPlusSquareFill>
    </div>
  );
}

export default Card