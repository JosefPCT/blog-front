import styles from "./HeroSection.module.css";

export default function HeroSection(){
  return(
    <div className={styles.heroSectionContainer}>
      <div className={styles.heroBgOverlay}></div>
      <div className={styles.heroContent}>
        <p className={styles.heroTopSubtitle}>Aspiring Developer</p>
        <h1 className={styles.heroTitle}>Hi, I'm Josef!</h1>
        <p className={styles.heroSubtitle}>I am an aspiring developer and create websites for a hobby</p>
        <button className={styles.heroBtn}>See blogs</button>
      </div>
    </div>
  )
}

