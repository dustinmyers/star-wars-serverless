import { useRouter } from "next/router";

import styles from "./Character.module.css";

const Character = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="App">
      <article className={styles.characterPage}>
        <h1>Follow the tutorial to build out this page 🚀</h1>
      </article>
    </main>
  );
};

export default Character;
