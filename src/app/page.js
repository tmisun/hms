import styles from "./styles/css/page.module.scss";
import Header from "./layout/header";
import Footer from "./layout/footer";
import SectionHero from "./layout/sectionHero";
import SectionAbout from "./layout/sectionAbout";
import SectionProject from "./layout/sectionProject";
import SectionCareer from "./layout/sectionCareer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <SectionHero></SectionHero>
      <SectionProject></SectionProject>
      <SectionCareer></SectionCareer>
      <SectionAbout></SectionAbout>
      <Footer></Footer>
    </div>
  );
}
