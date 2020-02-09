import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "unfetch";
import useSWR from "swr";

import styles from "./Character.module.css";

async function fetcher(path) {
  const res = await fetch(path);
  const json = await res.json();
  return json;
}

const Character = () => {
  const [character, setCharacter] = useState();
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data } = useSWR(`/api/get-character-by-id?id=${id}`, fetcher);

  useEffect(() => {
    if (data && !data.error) {
      setCharacter(data.character);
    }
  }, [data]);
  if (!character) return <h3>Fetching character data...</h3>;
  return (
    <main className="App">
      <article className={styles.characterPage}>
        <img src={character.thumbnail} alt={character.name} />
        <h1>{character.name}</h1>
      </article>
    </main>
  );
};

export default Character;
