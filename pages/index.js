import React, { useEffect, useState } from "react";
import fetch from "unfetch";
import useSWR from "swr";

import Characters from "../components/Characters";

const API_URL = "https://swapi.co/api/people/";
async function fetcher() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const { data, error } = useSWR("/repos/zeit/next.js", fetcher);

  useEffect(() => {
    setCharacters(data.results);
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
