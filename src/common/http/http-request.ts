import { AxiosRequestConfig } from "axios";

import axiosClient from "./axios-client";

export async function get<T>(url: string, options?: AxiosRequestConfig) {
  return axiosClient.get<T>(url, options);
}

export async function post<T>(
  url: string,
  data: unknown,
  options?: AxiosRequestConfig
) {
  return axiosClient.post<T>(url, data, options);
}

export async function put<T>(
  id: unknown,
  data: unknown,
  options?: AxiosRequestConfig
) {
  return axiosClient.put<T>(String(id), data, options);
}

export async function patch<T>(
  id: unknown,
  data: unknown,
  options?: AxiosRequestConfig
) {
  return axiosClient.patch<T>(String(id), data, options);
}

export async function destroy<T>(id: unknown, options?: AxiosRequestConfig) {
  return axiosClient.delete<T>(String(id), options);
}
