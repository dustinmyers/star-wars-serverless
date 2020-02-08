import styles from "./Characters.module.css";

const Characters = ({ characters }) => (
  <article className={styles.characterList}>
    {characters.map(character => (
      <section key={character.url} className={styles.characterCard}>
        <img
          src={character.thumbnail || "/placeholder.jpg"}
          alt={character.name}
          className={styles.characterImage}
        />
        <section className={styles.character}>
          <h2>{character.name}</h2>
          <p className={`${styles.characterDetails} bold`}>
            Born in the year {character.birth_year}
          </p>
        </section>
        <section className={`${styles.character} ${styles.dividerTop}`}>
          <p className={styles.characterDetails}>
            {character.gender !== "n/a" && `${character.gender} • `}
            {character.skin_color} skin • {character.eye_color} eyes
          </p>
          <p className={styles.characterDetails}>{character.height} tall</p>
        </section>
        <section className={`${styles.character} ${styles.dividerTop}`}>
          <p className={styles.characterDetails}>
            Appears in {character.films.length} films
          </p>
        </section>
      </section>
    ))}
  </article>
);

export default Characters;
