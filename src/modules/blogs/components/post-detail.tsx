"use client";
import { useParams, useRouter } from "next/navigation";
import * as apiBlogs from "../../../modules/blogs/api/blogs.api";
import { useEffect, useState } from "react";
import { IPost } from "../../../modules/blogs/interfaces/posts.interface";
import { Container } from "react-bootstrap";

// eslint-disable-next-line @next/next/no-async-client-component
const PostDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<IPost>();

  const getData = async () => {
    const res = await apiBlogs.read(parseInt(params.id as string));
    setPost(res.data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBack = () => {
    router.back();
  };
  const goPostComment = (id: any) => {
    router.push(`${id}/comments`);
  };

  return (
    <Container>
      <h2>{post?.id}</h2>
      <h1>Title: {post?.title}</h1>
      {post?.body ? <p>Body: {post?.body}</p> : <p>Author: {post?.author}</p>}
      <button className="me-2" onClick={() => goPostComment(post?.id)}>
        View Comment
      </button>
      <button onClick={() => goBack()}>Go gack</button>
    </Container>
  );
};
export default PostDetail;
