import * as HttpRequest from "../../../common/http/http-request";
export const list = () => {
  return HttpRequest.get<any>("/posts");
};

export const read = (id: number) => {
  return HttpRequest.get<any>(`/posts/${id}`);
};
