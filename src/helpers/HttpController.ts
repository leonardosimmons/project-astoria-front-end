
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { HttpResponse, HttpServerResponse } from '../utils/types';


interface HttpControllerInterface {
  get: (url: string) => Promise<any>;
  post<T>(url: string, data: T, token: string): Promise<AxiosResponse<any> | false>;
  put<T>(url: string, data: T): Promise<AxiosResponse<any> | false>;
  signInUser: (u_id: number) => Promise<any>;
};


class HttpController implements HttpControllerInterface
{
  private _buffer: any;
  private _auth: string;
  private _conn: AxiosInstance;

  constructor() {
    this._buffer;
    this._auth = JSON.parse(localStorage.getItem('auth-token') as string);
    this._conn = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_API as string,
      headers: {
        post: { 'auth-token': `Bearer ${this._auth}`},
        put: { 'auth-token': `Bearer ${this._auth}`}
      }
    });
  };

  get data() {
    return this._buffer;
  };

  public async get(url: string): Promise<any> {
    try {
      const res: AxiosResponse<any> = await this._conn({ method: 'get', url });
      const data: HttpResponse = res.status === 200 && res.data;

      this._buffer = data.payload;
      return data.payload;
    }
    catch(err) {
      console.log(err);
      throw new Error(err);
    }
  };

  public async post<T>(url: string, data: T): Promise<AxiosResponse<any> | false> {
    try {
      const res: AxiosResponse<any> = await this._conn({ method:'post', url, data: {...data} });
      const response: HttpServerResponse = res.status === 200 ? res : res.status === 201 ? res : false;
      
      this._buffer = response;
      return response;
    }
    catch(err) {
      console.log(err);
      throw new Error(err);
    }
  };

  public async put<T>(url: string, data: T): Promise<AxiosResponse<any> | false> {
    try {
      const res: AxiosResponse<any> = await this._conn({ method: 'put', url, data });
      const response: HttpServerResponse = res.status === 200 ? res : false;
      
      this._buffer = response;
      return response;
    }
    catch(err) {
      console.log(err);
      throw new Error(err);
    }
  }

  public async signInUser(u_id: number): Promise<any> {
    try {
      const api: string = '/sign-in';
      const res: HttpServerResponse = await this.put(process.env.NEXT_PUBLIC_USER_API as string + api, {u_id});
      
      if (res) {
        const response: HttpResponse = res.status === 200 ? res.data : false;

        this._buffer = response.payload;
        return response.payload;
      }
    }
    catch(err) {
      console.log(err);
      throw new Error(err);
    }
  };
};

export { HttpController };
