const Card = ({ children }) => {
  return(
    <div style={{ border: '2px solid red', padding: '20px', margin: '5px'}}>
       {children} 
    </div>
  )
}

export default Card;