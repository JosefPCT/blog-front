import { useState } from "react";
import { NavLink } from "react-router";

import LatestPostsList from "./LatestPostsList";
import styles from "./LatestPostsSection.module.css";

const LatestPostsSection = () => {
  const [showLimit, setShowLimit] = useState(3);

  const onLoadMore = () => {
    setShowLimit(prev => prev + 3);
  }

  return(
    <section className={styles.sectionContainer}>
        <div className={styles.headerContainer}>
            <h3>Latest Posts</h3>
            <div className={styles.buttonContainer}>
                <button className={styles.linkButton}><NavLink to='/all-blogs'>View All <span className={styles.alignSymbol}>&#8594;</span></NavLink></button>
            </div>
        </div>
        <div className={styles.mainContainer}>
            <LatestPostsList limit={showLimit}/>
        </div>
        <div className={styles.footerContainer}>
            { showLimit >= 15 ? <button className={styles.linkButton}><NavLink to='/all-blogs'>View All Blogs <span className={styles.alignSymbol}>&#8594;</span></NavLink></button> : <button onClick={onLoadMore} className={styles.linkButton}>Load more +</button>}
        </div>
    </section>
  )
}

export default LatestPostsSection;