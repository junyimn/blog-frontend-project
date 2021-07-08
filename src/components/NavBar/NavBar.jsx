import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <h2 className={styles.header__logo}>
            {/* <Link to="/" className={styles.header__logo__link}> */}
            Blog
            {/* </Link> */}
          </h2>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
