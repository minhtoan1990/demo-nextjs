import * as HttpRequest from "../../../common/http/http-request";
export const list = () => {
  return HttpRequest.get<any>("/posts");
};

export const read = (id: number) => {
  return HttpRequest.get<any>(`/posts/${id}`);
};

export const readComment = (id: number) => {
  return HttpRequest.get<any>(`/posts/${id}/comments`);
};
