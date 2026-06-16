import FeaturedPostSection from "./FeaturedPostSection";
import HeroSection from "./HeroSection";
import styles from "./HomePage.module.css";

export default function HomePage(){
  return(
    <div className={styles.landingPageContainer}>
      <section className={styles.heroSection}>
        <HeroSection />
      </section>
      <section className={styles.featuredSection}>
        <FeaturedPostSection />
      </section>
      <section className={styles.latestPostsSection}>
        <h3>Latest Posts</h3>
      </section>
      <section className={styles.newsletterSection}>
        Newsletter
      </section>
  
      
    </div>
  )
}
