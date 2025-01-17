import axios, { AxiosError } from 'axios';

import { i18n } from '@/plugins/i18n';
import { addMessage } from '@/utils/toaster';
import { useSessionStore } from '@/store/session';
import { useErrorListStore } from '@/store/errorList';

const baseConfig = {
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
  timeout: 180 * 1000,
};

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.request.use(config => {
  const sessionStore = useSessionStore();

  if (config.headers && sessionStore.hasSession) {
    config.headers['USER_EMAIL'] = sessionStore.email;
    config.headers['USER_TOKEN'] = sessionStore.token;
    config.headers['Cache-Control'] = 'no-cache';
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    handleError(error);
  },
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError = (request: AxiosError<any, any>) => {
  const { t } = i18n.global;
  const errorListStore = useErrorListStore();

  try {
    if (request.response?.data?.errors) {
      if (request.response.data.type === 'list') {
        errorListStore.setErrors(request.response.data.errors);
      } else {
        addMessage({ text: request.response.data.errors, type: 'error' });
      }
    } else {
      const status = request.response?.status;
      switch (status) {
        case 401:
          addMessage({ text: t('errors.sessionExpired'), type: 'error' });
          break;
        case 404:
          addMessage({ text: t('errors.notFound'), type: 'error' });
          break;
        case 422:
          addMessage({ text: t('errors.default'), type: 'error' });
          break;
        default:
          addMessage({ text: t('errors.default'), type: 'error' });
      }
    }
  } catch (e) {
    addMessage({ text: t('errors.default'), type: 'error' });
  }
};

export const apiService = {
  get: async <ResponseType, ParamsType = object>(
    path: string,
    params?: ParamsType,
  ) => {
    const { data } = await axiosInstance.get<ResponseType>(path, { params });

    return data;
  },
  getFile: async <ParamsType = object>(path: string, params?: ParamsType) => {
    const { data } = await axiosInstance.get<BlobPart>(path, {
      params,
      responseType: 'blob',
    });

    return data;
  },
  post: async <ResponseType, ParamsType = object>(
    path: string,
    params?: ParamsType,
  ) => {
    const { data } = await axiosInstance.post<ResponseType>(path, params);

    return data;
  },
  patch: async <ResponseType, ParamsType = object>(
    path: string,
    params?: ParamsType,
  ) => {
    const { data } = await axiosInstance.patch<ResponseType>(path, params);

    return data;
  },
  put: async <ResponseType, ParamsType = object>(
    path: string,
    params?: ParamsType,
  ) => {
    const { data } = await axiosInstance.put<ResponseType>(path, params);

    return data;
  },
  delete: async <ResponseType, ParamsType = object>(
    path: string,
    params?: ParamsType,
  ) => {
    const { data } = await axiosInstance.delete<ResponseType>(path, { params });

    return data;
  },
};
