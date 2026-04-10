import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPosts = async() => {
        try {
          const resp = await fetch('http://localhost:3000/api/v1/posts', { signal: controller.signal});
          const data = await resp.json();
          
          // Iterates through the data object, uses for...of to make await work
          // Creates a new field `authorName` using the `author` value to fetch data of author
          for (const post of data){
            let authorResponse = await fetch('http://localhost:3000' + post.author);
            let authorData = await authorResponse.json();
            console.log("author data");
            console.log(authorData);

            post.authorName = `${authorData.firstName} ${authorData.lastName}`;
          }
          console.log(data);
          setPosts(data);
        } catch (err) {
            console.log(err);
          if(err.name !== 'AbortError') setError(err);
        } finally {
          setLoading(false);
        }
    };

    fetchPosts();

    return () => controller.abort(); //cleanup
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>

  return (
    <ul>
        {posts.map((post) => 
        <li key={post.publicId}>
            <p>{post.title}</p>
            <p>{post.text}</p>
            <p>{post.createdAt}</p>
            <p>{post.authorName}</p>
        </li>)}
    </ul>
  )
}

export default Posts;