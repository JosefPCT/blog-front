import { dateFormatter } from "../../../shared/lib";

import styles from "./AllPostsListItem.module.css";

export default function AllPostsListItem({post}){
  return(
    <li key={post.publicId} className={styles.listItem}>
      <div className={styles.listImageContainer}>
        <a href={`/posts/${post.publicId}/${post.title}`}>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Article Photo" />
        </a>
      </div>
      <div className={styles.listContentContainer}>
        <div className={styles.contentHeader}>
          <h3 className={styles.contentTitle}><a href={`/posts/${post.publicId}/${post.title}`}>{post.title}</a></h3>
          <span className={styles.contentTag}>Tag</span>
        </div>
      
        <p>{post.text.slice(0,10)}...</p>
        <div className={styles.footer}>
          <span className={styles.contentDate}>By {post.authorName}</span> 
          &#x25CF;
          <span className={styles.contentDate}>{dateFormatter(post.createdAt)}</span>
        </div>
      </div>   
    </li>
  )
}