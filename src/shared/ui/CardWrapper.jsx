import styles from './CardWrapper.module.css'

const CardWrapper = ({ children }) => {
  return(
    <div className={styles['card-primo']}>
       {children} 
    </div>
  )
}

export default CardWrapper;