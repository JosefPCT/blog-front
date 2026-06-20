import { CardWrapper } from "../../../shared/ui";
import { dateFormatter } from "../../../shared/lib";

import styles from "./LatestPostListItem.module.css";

const LatestPostListItem = ({post, index, limit}) => {
  return(
    
      <li className={ index >= limit ? styles.hide : ''} >
        <CardWrapper>
          <div className={styles.imgContainer}>
            <a href={`/posts/${post.publicId}/${post.title}`}>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Article Photo" />
            </a>
          </div>
          <div className={styles.textContainer}>
            <span className={styles.contentTag}>Tag</span>
            <h3 className={styles.contentTitle}><a href={`/posts/${post.publicId}/${post.title}`}>{post.title}</a></h3>
            <span className={styles.contentDate}>{dateFormatter(post.createdAt)}</span>
          </div>
        </CardWrapper>
      </li>
   
  )
}

export default LatestPostListItem;