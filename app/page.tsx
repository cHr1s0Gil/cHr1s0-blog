import MainBanner from "components/MainBanner";

import styles from "styles/pages/home.module.css";
import About from "components/About";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <MainBanner></MainBanner>
      <About></About>
    </div>
  );
}