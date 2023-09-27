export interface IPost {
  email: string;
  name: string;
  id: number;
  title: string;
  author: string;
  body: string;
  postId: number;
}

export interface IPostComment {
  email: string;
  name: string;
  id: number;
  postId: number;
  body: string;
}
