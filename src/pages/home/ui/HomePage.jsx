import FeaturedPostsList from "./FeaturedPostsList"
import styles from "./HomePage.module.css";

export default function HomePage(){
  return(
    <div className={styles.landingPageContainer}>
      <div className={styles.heroSectionContainer}>
        <div className={styles.heroBgOverlay}></div>
        <div className={styles.heroContent}>
            <p className={styles.heroTopSubtitle}>Aspiring Developer</p>
            <h1 className={styles.heroTitle}>Hi, I'm Josef!</h1>
            <p className={styles.heroSubtitle}>I am an aspiring developer and create websites for a hobby</p>
            <button className={styles.heroBtn}>See blogs</button>
        </div>
      </div>
      <div className={styles.featuredPostContainer}>
        <h3>Featured Posts</h3>
        <FeaturedPostsList />
      </div>
      <div className={styles.latestPostsContainer}>
        <h3>Latest Posts</h3>
      </div>
      <div className={styles.newsletterContainer}>
        Newsletter
      </div>
  
      
    </div>
  )
}
