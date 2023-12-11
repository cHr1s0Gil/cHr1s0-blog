// components
import Header from "components/Header/Header";
import MainBanner from "components/MainBanner/MainBanner";
import About from "components/About/About";
import Projects from "components/Projects/Projects";
import Skills from "components/Skills/Skills";
import Footer from "components/Footer/Footer";

// styles
import styles from "styles/pages/home.module.css";


export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header></Header>
      <MainBanner></MainBanner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}