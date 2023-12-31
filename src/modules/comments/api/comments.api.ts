import * as HttpRequest from "../../../common/http/http-request";
export const list = () => {
  return HttpRequest.get<any>(`/comments`);
};

export const listWithPagination = (number: number, limit: number) => {
  return HttpRequest.get<any>(`/comments?_page=${number}&_limit=${limit}`);
};

export const read = (id: number) => {
  return HttpRequest.get<any>(`/comments/${id}`);
};
