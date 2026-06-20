import { useState } from "react";

import styles from "./NewsletterSection.module.css";

export default function NewsletterSection(){
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  }

  return(
    <section className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>A monthly post delivered straight to your inbox</h1>
        </div>
        <div className={styles.formContainer}>
          <form action="#" method="post" onSubmit={onSubmit}>
            <input type="email" name="newsletter_email" id="newsletter_email" placeholder="Your email" />
            <button type="submit">Submit <span className={styles.alignSymbol}>&#8594;</span></button>
            
          </form>
        </div>
        <div className={styles.subheadingContainer}>
            {isSubmit ? <span className={styles.message}> Email submitted successfully &#10003; </span>  : ''}
            <span className={styles.subheading}>Zero spam, just the good stuff</span>
        </div>
      </div>
    </section>
  )
}
