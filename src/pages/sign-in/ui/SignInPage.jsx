// Main component for sign-in page layer
import LoginSection from "./LoginSection";

import styles from "./SignInPage.module.css";

const SignInPage = () => {
  return(
    <div className={styles.pageContainer}>
      <LoginSection />
    </div>
  )
}

export default SignInPage;