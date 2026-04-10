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
            <p>{post.author}</p>
        </li>)}
    </ul>
  )
}

export default Posts;