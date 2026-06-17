// Refactor using Tanstack Query
import { useQuery } from "@tanstack/react-query";

import fetchFeaturedPost from "../api/fetchFeaturedPost";
import styles from "./FeaturedPostSection.module.css";
import dateFormatter from "../../../shared/lib/dateFormatter";

const FeaturedPostSection = () => {
  const urlQuery = "?sort=-comments";

  const { isPending, isError, data, error }= useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchFeaturedPost(urlQuery),
  });

  if (isPending){
    return <span>Loading...</span>
  }

  if (isError){
    return <span>Error: {error.message} </span>
  }

  return (
    
    <div>
      <h3>Featured Post</h3>
      <div className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <a className={styles.linkNoDecoration} href="#"><span className={styles.contentTag}>Informative</span></a>
          <h2 className={styles.contentTitle}><a href={`/posts/${data.publicId}/${data.title}`}>{data.title}</a></h2>
          <p className={styles.contentDate}>{dateFormatter(data.createdAt)}</p>
        </div>
      
        <div className={styles.imageContainer}>
          <a href={`/posts/${data.publicId}/${data.title}`}>
            <img src="https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Article Photo" srcset="" />
          </a>
        </div> 
      </div>
    </div>
    // <ul>
    //   {data.map((post) => 
    //   <li key={post.publicId}>
    //     <a href={`/posts/${post.publicId}/${post.title}`}><p>{post.title}</p></a>
    //     <p>{post.text}</p>
    //     <p>{post.createdAt}</p>
    //     <p>{post.authorName}</p>
    //   </li>)}
    // </ul>
  )
}

export default FeaturedPostSection;

// Normal Implementation
// import { useState, useEffect } from "react";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  

//   useEffect(() => {
//     const controller = new AbortController();
//     const fetchPosts = async() => {
//         const apiUrl = import.meta.env.VITE_API_URL;
//         const urlQuery = "?sort=+createdAt";
//         try {
//           const resp = await fetch(`${apiUrl}/api/v1/posts${urlQuery}`, { signal: controller.signal});
//           const data = await resp.json();
          
//           // Iterates through the data object, uses for...of to make await work
//           // Creates a new field `authorName` using the `author` value to fetch data of author
//           for (const post of data){
//             let authorResponse = await fetch(`${apiUrl}${post.author}`);
//             let authorData = await authorResponse.json();
//             console.log("author data");
//             console.log(authorData);

//             post.authorName = `${authorData.firstName} ${authorData.lastName}`;
//           }
//           console.log(data);
//           setPosts(data);
//         } catch (err) {
//             console.log(err);
//           if(err.name !== 'AbortError') setError(err);
//         } finally {
//           setLoading(false);
//         }
//     };

//     fetchPosts();

//     return () => controller.abort(); //cleanup
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message} </p>

//   return (
//     <ul>
//         {posts.map((post) => 
//         <li key={post.publicId}>
//             <p>{post.title}</p>
//             <p>{post.text}</p>
//             <p>{post.createdAt}</p>
//             <p>{post.authorName}</p>
//         </li>)}
//     </ul>
//   )
// }

// export default Posts;