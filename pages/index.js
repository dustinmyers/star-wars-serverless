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
  const { data, error } = useSWR("https://swapi.co/api/people/", fetcher);

  useEffect(() => {
    if (data) {
      setCharacters(data.results);
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
