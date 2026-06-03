import { Card } from "../../../shared/ui";
import { dateFormatter } from "../../../shared/lib";

const PostCommentsListItem = ({comment}) => {
  return(
    <li>
        <Card>
          <p>Key: {comment.publicId}</p>
          <a href={`/posts/${comment.publicId}/comments/${comment.publicId}/${comment.text}`}><p>{comment.text}</p></a>
          <p>Comment: {comment.text}</p>
          <p>Commented on: {dateFormatter(comment.createdAt)}</p>
          <p>Commenter: {comment.authorName}</p>
      </Card>
    </li>
  )
}

export default PostCommentsListItem;