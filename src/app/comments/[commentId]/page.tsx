import CommentDetail from "@/modules/comments/components/comment-detail";

import type { Metadata, ResolvingMetadata } from "next";

// eslint-disable-next-line @next/next/no-async-client-component

const Comment = async () => {
  return (
    <>
      <CommentDetail />
    </>
  );
};
export default Comment;

type Props = {
  params: { commentId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.commentId;
  console.log(id);
  // fetch data
  const comment = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  ).then((res) => {
    return res.json();
  });

  return {
    title: comment.name,
    description: comment.body,
  };
}

// export async function generateStaticParams() {
//   const comments = await fetch(
//     `https://jsonplaceholder.typicode.com/comments`
//   ).then((res) => res.json());

//   return comments.map((post: { commentId: any }) => ({
//     commentId: post.commentId,
//   }));
// }
