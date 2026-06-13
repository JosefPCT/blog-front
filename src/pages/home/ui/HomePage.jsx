import FeaturedPostsList from "./FeaturedPostsList"
import styles from "./HomePage.module.css";

export default function HomePage(){
  return(
    <div className={styles.landingPageContainer}>
      <div className={styles.heroImgContainer}>
        Hero Image
      </div>
      <div className={styles.heroTextContainer}>
        Hero Text
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
