
import { HttpController } from '../HttpController';

export function useFetch(baseUrl?: string, headers?: any) 
{
  const http: HttpController = new HttpController(baseUrl, headers);
  
  function get(url: string) {
    return http.get(url);
  };

  function post<T>(url: string, data: T) {
    return http.post<T>(url, data);
  };

  function put<T>(url: string, data: T) {
    return http.put<T>(url, data);
  };

  return {
    data: http.data,
    get,
    post,
    put
  };
};
