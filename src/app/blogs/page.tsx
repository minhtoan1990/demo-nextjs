import { Metadata } from "next";
import PostsList from "../../modules/blogs/components/posts-list";

export const metadata: Metadata = {
  title: "Blogs List",
  description: "This is Blogs list with my Project",
};

const Blogs = async () => {
  return <PostsList />;
};
export default Blogs;
