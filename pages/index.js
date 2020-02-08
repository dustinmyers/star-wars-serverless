import React, { useEffect, useState } from "react";
import fetch from "unfetch";
import useSWR from "swr";

import Characters from "../components/Characters";

async function fetcher(path) {
  const res = await fetch(path);
  const json = await res.json();
  return json;
}

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const { data } = useSWR("/api/get-character-list", fetcher);

  useEffect(() => {
    if (data && !data.error) {
      console.log(data);
      setCharacters(data.characters);
    }
  }, [data]);

  return (
    <div>
      <main className="App">
        <Characters characters={characters} />
      </main>
    </div>
  );
};

export default Home;
