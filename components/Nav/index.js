import Link from "next/link";

import styles from "./Nav.module.css";

const Nav = () => (
  <header className={styles.header}>
    <img src="/SW-logo.png" width="120" />
    <h1>Star Wars Characters</h1>
    <div style={{ width: "120px" }} />
  </header>
);

export default Nav;
