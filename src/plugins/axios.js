'use strict'

import axios from 'axios'
import api from '../../config/api'

const config = {
  methods: 'POST',
  baseURL: api.base,
  timeout: 15000,
  withCredentials: true,
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    const { status, data } = response
    return status === 200 ? data : Promise.reject(data)
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default _axios
