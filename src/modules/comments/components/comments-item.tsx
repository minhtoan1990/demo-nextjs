import { FC } from "react";
import { IComment } from "../interfaces/comments.interface";

interface ItemProps {
  comment: IComment;
}
const CommentItem: FC<ItemProps> = (props) => {
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
export default CommentItem;
