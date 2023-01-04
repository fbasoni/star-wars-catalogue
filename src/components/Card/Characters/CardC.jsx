import styles from './CardC.module.css';

const CharacterCard = ({children}) => {
  return (
    <div className={styles.characterCard}>
      <section className={styles.cardHeader}>
        <h1 className={styles.characterName}>{children.name}</h1>
        <div className={styles.saber}></div> 
      </section>

      <ul className={styles.characterInfo}>
        <li className={styles.characterDescription}><strong>Gender:</strong> {children.gender};</li>
        <li className={styles.characterDescription}><strong>Height:</strong> {children.height}in;</li>
        <li className={styles.characterDescription}> <strong>Mass:</strong>{children.mass}lbs;</li>
        <li className={styles.characterDescription}><strong>Hair color:</strong> {children.hair_color};</li>
        <li className={styles.characterDescription}><strong>Skin color:</strong> {children.skin_color};</li>
        <li className={styles.characterDescription}><strong>Eye color:</strong> {children.eye_color};</li>
        <li className={styles.characterDescription}><strong>Birth year:</strong> {children.birth_year}.</li>
      </ul>
    </div>
  );
}

export default CharacterCard