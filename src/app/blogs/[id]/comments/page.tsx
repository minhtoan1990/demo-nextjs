import PostCommentWithId from "@/modules/blogs/components/post-comment";
import { Metadata, ResolvingMetadata } from "next";

const BlogsComment = () => {
  return <PostCommentWithId />;
};

export default BlogsComment;

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  // fetch data
  const blogs = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => {
    return res.json();
  });

  return {
    title: blogs.title,
    description: blogs.body,
  };
}
