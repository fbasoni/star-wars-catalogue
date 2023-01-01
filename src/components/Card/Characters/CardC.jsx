import styles from './CardC.module.css';
import { FcClapperboard } from 'react-icons/fc'

const CharacterCard = ({children, onClick}) => {
  return (
    <div className={styles.characterCard}>
      <section className={styles.cardHeader}>
        <h1 className={styles.characterName}>{children.name}</h1>
        <div className={styles.saber}></div> 
      </section>

      <ul className={styles.characterInfo}>
        <li className={styles.description}><strong>Gender:</strong> {children.gender};</li>
        <li className={styles.characterDescription}><strong>Height:</strong> {children.height}in;</li>
        <li className={styles.description}> <strong>Mass:</strong>{children.mass}lbs;</li>
        <li className={styles.description}><strong>Hair color:</strong> {children.hair_color};</li>
        <li className={styles.description}><strong>Skin color:</strong> {children.skin_color};</li>
        <li className={styles.description}><strong>Eye color:</strong> {children.eye_color};</li>
        <li className={styles.description}><strong>Birth year:</strong> {children.birth_year};</li>
      </ul>
      <section className={styles.cardFooter}>
        <FcClapperboard className={styles.clapperBoard} onClick={onClick}></FcClapperboard>
      </section>
    </div>
  );
}

export default CharacterCard