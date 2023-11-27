// components
import MainBanner from "components/MainBanner/MainBanner";
import About from "components/About/About";
import Projects from "components/Projects/Projects";

// styles
import styles from "styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <MainBanner></MainBanner>
      <About></About>
      <Projects></Projects>
    </div>
  );
}