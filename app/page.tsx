import MainBanner from "components/MainBanner";

import styles from "styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <MainBanner></MainBanner>
    </div>
  );
}