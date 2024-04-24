import axios, { AxiosResponse } from "axios";

export async function get<T>(url: string): Promise<T> {
  const response: AxiosResponse<T> = await axios.get(url);
  return response.data;
}

export async function post<T>(url: string, data: any): Promise<T> {
  const response: AxiosResponse<T> = await axios.post(url, data);
  return response.data;
}

export async function del<T>(url: string): Promise<T> {
  const response: AxiosResponse<T> = await axios.delete(url);
  return response.data;
}