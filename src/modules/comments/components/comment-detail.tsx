"use client";
import { useParams, useRouter } from "next/navigation";
import * as apiBlogs from "../../../modules/comments/api/comments.api";
import { useQuery } from "@tanstack/react-query";
import { Container } from "react-bootstrap";

// eslint-disable-next-line @next/next/no-async-client-component
const CommentDetail = () => {
  const params = useParams();
  const router = useRouter();

  const {
    isLoading,
    error,
    data: comment,
  } = useQuery({
    queryKey: ["commentsDetail"],
    queryFn: async () => {
      return await apiBlogs.read(parseInt(params.commentId as string));
    },
  });

  const goBack = () => {
    router.back();
  };

  const goBlogDetail = (id: any) => {
    router.push(`../blogs/${id}`);
  };

  if (isLoading) {
    return "Comment loading...";
  }

  return (
    <Container>
      <h2>{comment?.data.id}</h2>
      <h1>Name: {comment?.data.name}</h1>
      <h3>Email: {comment?.data.email}</h3>
      {comment?.data.body ? <p>Body: {comment?.data.body}</p> : ""}
      <button className="mr-2" onClick={() => goBlogDetail(comment?.data.id)}>
        View Blog
      </button>{" "}
      <button onClick={() => goBack()}>Go gack</button>
    </Container>
  );
};

export default CommentDetail;
