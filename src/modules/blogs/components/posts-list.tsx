"use client";
import { useEffect, useState } from "react";
import * as apiBlogs from "../api/blogs.api";
import { IPost } from "../interfaces/posts.interface";
import PostItem from "./post-item";
import { useQuery } from "@tanstack/react-query";

import { paginate } from "@/until/paginate";
import Pagination from "@/modules/pagination/components/pagination";

const PostsList = () => {
  const pageSize = 50;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["postsList"],
    queryFn: async () => {
      return (await apiBlogs.list()).data as IPost[];
    },
  });
  // const getData = async () => {
  //   const res = await apiBlogs.list();
  //   setPosts(res.data);
  // };

  // useEffect(() => {
  //   // getData();
  // }, []);
  const paginateComments = paginate(posts, currentPage, pageSize);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <>Posts Loading...!</>;
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {paginateComments?.map((item) => {
          return <PostItem key={item.id} item={item} />;
        })}
      </ul>

      <Pagination
        items={posts?.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
export default PostsList;
