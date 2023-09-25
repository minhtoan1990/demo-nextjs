"use client";
import { SetStateAction, useState } from "react";
import * as apiBlogs from "../api/comments.api";
import { IComment } from "../interfaces/comments.interface";
import { useQuery } from "@tanstack/react-query";
import CommentItem from "./comments-item";
import "../styles/comments.scss";
import { Container, Table } from "react-bootstrap";
import { paginate } from "../../../until/paginate";
import Pagination from "@/modules/pagination/components/pagination";

const CommentsList = () => {
  // set value paginate
  const pageSize = 50;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    isLoading,
    error,
    data: comments,
  } = useQuery({
    queryKey: ["commentsList"],
    queryFn: async () => {
      return (await apiBlogs.list()).data as IComment[];
    },
  });

  //get data with param page and limit

  // const {
  //   isLoading,
  //   error,
  //   data: comments,
  // } = useQuery({
  //   queryKey: ["commentsList"],
  //   queryFn: async () => {
  //     return (await apiBlogs.listWithPagination(currentPage, pageSize))
  //       .data as IComment[];
  //   },
  // });

  // paginate
  const paginateComments = paginate(comments, currentPage, pageSize);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <>Comments Loading...!</>;
  }

  return (
    <>
      <Container>
        <h1 className="mt-2 mb-2">List Comments</h1>
        <Pagination
          items={comments?.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <Table className="mt-2" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginateComments?.map((comment: IComment) => {
              return <CommentItem key={comment.id} comment={comment} />;
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default CommentsList;
