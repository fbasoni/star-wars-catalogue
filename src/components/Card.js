import styles from './Card.module.css';

function Card({imageURL, name, releaseDate}) {
  return (
  <div className={styles.movieCard}>
    <img src={imageURL} alt={name} className={styles.posterImage}></img>
    <div className={styles.movieInfos}>
      <h1 className={styles.movieTitle}>{name}</h1>
      <p className={styles.movieReleaseDate}>{releaseDate}</p>
    </div>
  </div>
  )
}

export default Card