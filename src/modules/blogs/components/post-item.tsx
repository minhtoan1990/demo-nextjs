import { FC } from "react";
import { IPost } from "../interfaces/posts.interface";

interface PostItemProps {
  item: IPost;
}
const PostItem: FC<PostItemProps> = (props) => {
  const { item } = props;
  return (
    <>
      <li>
        {item.id} - {item.title} <a href={`blogs/${item.id}`}>View detail</a>
      </li>
    </>
  );
};
export default PostItem;
