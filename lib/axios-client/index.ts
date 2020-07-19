import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

export interface IAxiosResponse<T> extends AxiosResponse<T> {}

export interface IAxiosRequestConfig extends AxiosRequestConfig {}

export interface IAxiosClientConfig {
  baseURL: string;
  timeout: number;
  headers: { [key: string]: string };
}

export interface IAxiosClient {
  get<T>(path: string, requestConfig: IAxiosRequestConfig): Promise<IAxiosResponse<T>>;
  post<T, U>(path: string, body: U, requestConfig?: IAxiosRequestConfig): Promise<IAxiosResponse<T>>;
}

export class AxiosClient {
  private readonly instance: AxiosInstance;
  constructor(axiosClientConfig: IAxiosClientConfig) {
    this.instance = axios.create({
      baseURL: axiosClientConfig.baseURL,
      timeout: axiosClientConfig.timeout,
      headers: axiosClientConfig.headers,
    });
  }

  public get<T>(path: string, requestConfig: IAxiosRequestConfig): Promise<IAxiosResponse<T>> {
    return this.instance.get(path, requestConfig);
  }

  public post<T, U>(path: string, body: U, requestConfig?: IAxiosRequestConfig): Promise<IAxiosResponse<T>> {
    return this.instance.post(path, body, requestConfig);
  }
}
