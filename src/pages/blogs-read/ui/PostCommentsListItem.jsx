import { CardWrapper } from "../../../shared/ui";
import { dateFormatter } from "../../../shared/lib";

import styles from "./PostCommentsListItem.module.css";

const PostCommentsListItem = ({comment}) => {
  return(
    <li className={styles['no-style']}>
        <CardWrapper>
          <p>Key: {comment.publicId}</p>
          <a href={`/posts/${comment.publicId}/comments/${comment.publicId}/${comment.text}`}><p>{comment.text}</p></a>
          <p>Comment: {comment.text}</p>
          <p>Commented on: {dateFormatter(comment.createdAt)}</p>
          <p>Commenter: {comment.authorName}</p>
      </CardWrapper>
    </li>
  )
}

export default PostCommentsListItem;