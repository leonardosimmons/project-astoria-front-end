
import axios, { AxiosResponse } from 'axios';


interface HttpControllerInterface {
  get: (url: string) => Promise<any>;
  post<T>(url: string, data: T): Promise<any>;
  put<T>(url: string, data: T): Promise<any>;
};


class HttpController implements HttpControllerInterface
{
  private _buffer: any;

  constructor() {
    this._buffer;
  }

  get data() {
    return this._buffer;
  };

  public async get(url: string): Promise<any> {
    return await axios({ 
      method: 'get', 
      url 
    }).then((res: any) => res.status === 200 && res.data.payload);
  };

  public async post<T>(url: string, data: T): Promise<AxiosResponse<any> | false> {
    return await axios({
      method:'post', 
      url, 
      data: {...data} 
    }).then((res) => res.status === 200 ? res : res.status === 201 ? res : false);
  };

  public async put<T>(url: string, data: T): Promise<AxiosResponse<any> | false> {
    return await axios({
      method: 'put', 
      url, 
      data
    }).then((res) => res.status === 200 && res);
  }
};

export { HttpController };