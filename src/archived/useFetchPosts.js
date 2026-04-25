// import { useState, useEffect } from "react";

// export const useFetchPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchPosts = async() => {
//         try {
//           const res = await fetch('http://localhost:3000/api/v1/posts', { signal: controller.signal });
//           const data = await res.json();
//           setPosts(data);
//         } catch (error) {
//           if(error.name !== 'AbortError') setError(error);
//         } finally {
//           setLoading(false);
//         }
//     };

//     fetchPosts();

//     return ()
//   })

//   return { posts };
// }