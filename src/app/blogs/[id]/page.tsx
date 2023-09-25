import PostDetail from "@/modules/blogs/components/post-detail";
import type { Metadata, ResolvingMetadata } from "next";

// eslint-disable-next-line @next/next/no-async-client-component
const BlogDetail = async () => {
  return (
    <>
      <PostDetail />
    </>
  );
};
export default BlogDetail;

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
    title: blogs.name,
    description: blogs.body,
  };
}
