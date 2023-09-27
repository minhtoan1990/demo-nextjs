"use client";
import { useParams, useRouter } from "next/navigation";
import * as apiBlogs from "../../../modules/blogs/api/blogs.api";
import { useEffect, useState } from "react";
import { IPost } from "../../../modules/blogs/interfaces/posts.interface";
import { Container, Table } from "react-bootstrap";
import PostCommentDetail from "./post-comment-detail";

// eslint-disable-next-line @next/next/no-async-client-component
const PostCommentWithId = () => {
  const params = useParams();
  const router = useRouter();

  const [postComment, setPostComment] = useState([]);

  const getData = async () => {
    const res = await apiBlogs.readComment(parseInt(params.id as string));
    setPostComment(res.data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <Container className="mt-4">
      <h1></h1>
      <Table className="mt-2" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {postComment?.map((item: IPost) => {
            return <PostCommentDetail key={item.id} comment={item} />;
          })}
        </tbody>
      </Table>
      <button onClick={() => goBack()}>Go gack</button>
    </Container>
  );
};
export default PostCommentWithId;
