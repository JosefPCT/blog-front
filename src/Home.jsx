async function Home(){
  // const data = { title: "am "}
  let data;
  try {
    const response = await fetch('http://localhost:3000');
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`There was an error`, error);
  }
  
  return(
    
    <>
      <h1>Welcome {data.title}</h1>
    </>
  )
}

export default Home