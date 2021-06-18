
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { HttpHeader } from '../utils/types/types';


interface HttpControllerInterface {
  get: (url: string) => Promise<any>;
  post<T>(url: string, data: T): Promise<any>;
  put<T>(url: string, data: T): Promise<any>;
  signInUser: (u_id: number, header: HttpHeader) => Promise<any>;
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

  public async get(url: string, headers?: HttpHeader): Promise<any> {
    try {
      return await this._conn({ 
        method: 'get',
        headers: headers 
        ? {...headers} 
        : {'Content-Type': 'application/json'},  
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

  public async post<T>(url: string, data: T, headers?: HttpHeader): Promise<AxiosResponse<any> | false> {
    try {
      return await this._conn({
        method:'post',
        headers: headers 
        ? {...headers} 
        : {'Content-Type': 'application/json'}, 
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

  public async put<T>(url: string, data: T, headers?: HttpHeader): Promise<AxiosResponse<any> | false> {
    try {
      return await this._conn({
        method: 'put',
        headers: headers 
        ? {...headers} 
        : {'Content-Type': 'application/json'},  
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

  public async signInUser(u_id: number): Promise<any> {
    try {
      const api: string = '/sign-in';
      return await this.put(process.env.NEXT_PUBLIC_USER_API as string + api, {u_id}).then((res) => {
        if (res) {
          return res.status === 200 ? res.data.payload : false;
        }
      });
    }
    catch(err) {
      console.log(err);
      throw new Error(err);
    }
  };
};

export { HttpController };
