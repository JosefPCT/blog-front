import { useState, useEffect } from "react"

function Test(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const resp = await fetch('http://localhost:3000/api/v1/posts');
        if(!resp.ok) throw new Error ("Network response was not ok");
        // console.log(`Response object`, resp);
        console.log(resp);
        const result = await resp.json();
        // console.log(`Result object`, result);
        console.log(result);
        setData(result)
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  return(
    
    <>
      <h1>Welcome { !loading && data[0].title}</h1>
    </>
  )
}

export default Test