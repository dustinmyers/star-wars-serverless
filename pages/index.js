import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/Nav/nav";
import Characters from "../components/Characters";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://swapi.co/api/people/");
      const { results } = await res.json();
      setCharacters(results);
    }
    getData();
  }, []);

  return (
    <div>
      <Head title="Star Wars Characters" />
      <Nav />
      <main className="App">
        <Characters characters={characters} />
      </main>
    </div>
  );
};

export default Home;
