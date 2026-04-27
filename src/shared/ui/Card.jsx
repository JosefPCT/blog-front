import styles from './Card.module.css'

const Card = ({ children }) => {
  return(
    <div className={styles['card-primo']}>
       {children} 
    </div>
  )
}

export default Card;