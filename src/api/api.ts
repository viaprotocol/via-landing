import type { AxiosInstance, AxiosPromise, Cancel } from 'axios'
import axios from 'axios'

import type { ApiError, ApiExecutor, ApiExecutorArgs, ApiRequestConfig, WithAbordFn } from './api.types'

const axiosInstance: AxiosInstance = axios.create()

const didAbort = (error: unknown): error is Cancel & { aborted: boolean } => axios.isCancel(error)

const getCancelSource = () => axios.CancelToken.source()

const withAbort = <T>(fn: WithAbordFn) => {
  const executor: ApiExecutor<T> = async (...args: ApiExecutorArgs) => {
    const originalConfig = args[args.length - 1] as ApiRequestConfig
    const { abort, ...config } = originalConfig

    if (typeof abort === 'function') {
      const { cancel, token } = getCancelSource()
      config.cancelToken = token
      abort(cancel)
    }

    try {
      if (args.length > 2) {
        const [url, body] = args
        return await fn<T>(url, body, config)
      }
      const [link] = args
      return await fn<T>(link, config)
    } catch (error) {
      if (didAbort(error)) {
        error.aborted = true
      }

      throw error
    }
  }

  return executor
}

const withLogger = async <T>(promise: AxiosPromise<T>) =>
  promise.catch((error: ApiError) => {
    /*
    Always log errors in dev environment
    */
    if (process.env.NODE_ENV === 'production') {
      throw error
    }

    if (error.response) {
      console.error(error.response.data)
      console.error(error.response.status)
      console.error(error.response.headers)
    } else if (error.request) {
      console.error(error.request)
    } else {
      console.error('Error', error.message)
    }
    console.error(error.config)

    throw error
  })

// Main api function
const api = (instance: AxiosInstance) => {
  return {
    get: <T>(url: string, config: ApiRequestConfig = {}) => withLogger<T>(withAbort<T>(instance.get)(url, config)),
    delete: <T>(url: string, config: ApiRequestConfig = {}) =>
      withLogger<T>(withAbort<T>(instance.delete)(url, config)),
    post: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withLogger<T>(withAbort<T>(instance.post)(url, body, config)),
    patch: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withLogger<T>(withAbort<T>(instance.patch)(url, body, config)),
    put: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withLogger<T>(withAbort<T>(instance.put)(url, body, config))
  }
}

export default api(axiosInstance)
