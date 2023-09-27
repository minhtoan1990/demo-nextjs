import { FC } from "react";
import { IPost } from "../interfaces/posts.interface";

interface ItemProps {
  comment: IPost;
}
const PostCommentDetail: FC<ItemProps> = (props) => {
  const { comment } = props;
  return (
    <>
      <tr>
        <td>{comment.id}</td>
        <td>{comment.name}</td>
        <td>{comment.email}</td>
        <td>
          <a href={`comments/${comment.id}`}>View detail</a>
        </td>
      </tr>
    </>
  );
};
export default PostCommentDetail;
