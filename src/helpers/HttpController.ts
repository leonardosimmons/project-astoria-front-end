
import axios, { AxiosInstance, AxiosResponse } from 'axios';


interface HttpControllerInterface {
  get: (url: string) => Promise<any>;
  post<T>(url: string, data: T): Promise<any>;
  put<T>(url: string, data: T): Promise<any>;
};


class HttpController implements HttpControllerInterface
{
  private _buffer: any;
  private _conn: AxiosInstance;

  constructor(baseUrl?: string, headers?: any) {
    this._buffer;
    this._conn = axios.create({
      baseURL: baseUrl || process.env.NEXT_PUBLIC_BASE_API as string,
      headers: headers || { 'Content-Type': 'application/json' }
    });
  };

  get data() {
    return this._buffer;
  };

  public async get(url: string): Promise<any> {
    try {
      return await this._conn({ 
        method: 'get', 
        url 
      })
      .then((res: AxiosResponse<any>) => res.status === 200 && res.data.payload)
      .then((data: any) => {
        this._buffer = data;
        return data;
      });
    }
    catch(err) {
      console.log(err);
      return false;
    }
  };

  public async post<T>(url: string, data: T): Promise<AxiosResponse<any> | false> {
    try {
      return await this._conn({
        method:'post', 
        url, 
        data: {...data} 
      })
      .then((res: AxiosResponse<any>) => res.status === 200 ? res : res.status === 201 ? res : false)
      .then((data: any) => {
        this._buffer = data;
        return data;
      });
    }
    catch(err) {
      console.log(err);
      return false;
    }
  };

  public async put<T>(url: string, data: T): Promise<AxiosResponse<any> | false> {
    try {
      return await this._conn({
        method: 'put', 
        url, 
        data
      })
      .then((res: AxiosResponse<any>) => res.status === 200 ? res : false)
      .then((data: any) => {
        this._buffer = data;
        return data;
      });
    }
    catch(err) {
      console.log(err);
      return false;
    }
  }
};

export { HttpController };
