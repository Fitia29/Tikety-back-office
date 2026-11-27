import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { ApiResponse, Meta } from "@/interfaces/common/global";
import { axiosClient, catchAxios } from "@/lib/axios";

export async function genericGetList<T>(
  url: string,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig,
): Promise<{ meta?: Meta; data: T[] } | undefined> {
  try {
    const response: AxiosResponse<ApiResponse<T[]>> = await axiosClient.get(
      url,
      {
        ...config,
        params,
        paramsSerializer: {
          indexes: null,
        },
      },
    );

    if (!response.data.data)
      throw new Error(response.data.message || "An error occurred");

    return { data: response.data.data, meta: response.data.meta };
  } catch (error) {
    catchAxios(error);
  }
}

export async function genericGet<T>(
  url: string,
  params?: Record<string, string | number | boolean>,
  config?: AxiosRequestConfig,
): Promise<{ meta?: Meta; data: T } | undefined> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axiosClient.get(url, {
      ...config,
      params,
      paramsSerializer: {
        indexes: null,
      },
    });

    if (!response.data.data)
      throw new Error(response.data.message || "An error occurred");

    return { data: response.data.data, meta: response.data.meta };
  } catch (error) {
    catchAxios(error);
  }
}

export async function genericGetOne<T>(
  url: string,
  id: string,
  config?: AxiosRequestConfig,
): Promise<T | undefined> {
  return genericGet<T>(url, { id }, config).then((res) => res?.data);
}

export async function genericCreate<TNewData, TResponse>(
  url: string,
  newData: TNewData,
  config?: AxiosRequestConfig,
): Promise<TResponse | undefined> {
  try {
    const response: AxiosResponse<ApiResponse<TResponse>> =
      await axiosClient.post(url, newData, config);

    if (!response.data.success)
      throw new Error(response.data.message || "An unknown error occurred");

    return response.data.data;
  } catch (error) {
    catchAxios(error);
  }
}

export async function genericUpdate<TUpdate, TResponse>(
  url: string,
  id: string,
  data: TUpdate,
  config?: AxiosRequestConfig,
): Promise<TResponse | undefined> {
  try {
    const response: AxiosResponse<ApiResponse<TResponse>> =
      await axiosClient.put(`${url}/${id}`, data, config);

    if (!response.data.success)
      throw new Error(response.data.message || "An unknown error occurred");

    return response.data.data;
  } catch (error) {
    catchAxios(error);
  }
}

export async function genericDelete(
  url: string,
  id: string | number,
  config?: AxiosRequestConfig,
) {
  try {
    const response: AxiosResponse<ApiResponse<string>> =
      await axiosClient.delete(`${url}/${id}`, config);

    if (!response.data.success)
      throw new Error(response.data.message || "An unknown error occurred");

    return response.data.data;
  } catch (error) {
    catchAxios(error);
  }
}
