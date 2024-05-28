/*
 * Plucked shamelessly from https://github.com/delirius325/axios-curlirize
 */

import rewriteProxyPath from "src/services/rewriteProxyPath"

export default class AxiosCurlHelper {
  constructor(config) {
    this.request = config
  }

  getHeaders() {
    let headers = this.request.headers
    let curlHeaders = ''

    // get the headers concerning the appropriate method (defined in the global axios instance)
    if (headers.hasOwnProperty('common')) {
      headers = this.request.headers[this.request.method]
    }

    // add any custom headers (defined upon calling methods like .get(), .post(), etc.)
    for (let property in this.request.headers) {
      if (
        !['common', 'delete', 'get', 'head', 'patch', 'post', 'put'].includes(
          property,
        )
      ) {
        headers[property] = this.request.headers[property]
      }
    }

    for (let property in headers) {
      let header = `${property}:${headers[property]}`

      curlHeaders = `${curlHeaders} -H "${header}"`
    }

    return curlHeaders.trim()
  }

  getMethod() {
    return `-X ${this.request.method.toUpperCase()}`
  }

  getBody() {
    if (
      typeof this.request.data !== 'undefined' &&
      this.request.data !== '' &&
      this.request.data !== null &&
      this.request.method.toUpperCase() !== 'GET'
    ) {
      let data =
        typeof this.request.data === 'object' ||
        Object.prototype.toString.call(this.request.data) === '[object Array]'
          ? JSON.stringify(this.request.data)
          : this.request.data

      return `--data '${data}'`.trim()
    } else {
      return ''
    }
  }

  getUrl() {
    let url = ''

    // Manually add the base api url during local development.
    // if (isLocalDeployEnv) {
    //   url = getLocalApiEnvUrl()
    // }

    if (this.request.baseURL) {
      url += this.request.baseURL
    }

    return rewriteProxyPath(url + this.request.url)
  }

  getQueryString() {
    let queryStr = ''
    let i = 0

    for (let param in this.request.params) {
      const paramValue = this.request.params[param]

      if (typeof paramValue === 'undefined' || paramValue === null) {
        continue
      }

      let paramStr = `${param}=${paramValue}`

      if (Array.isArray(paramValue)) {
        if (paramValue.length === 0) {
          continue
        }

        paramStr = paramValue
          .map((value) => {
            return `${param}[]=${value}`
          })
          .join('&')
      }

      queryStr += i === 0 ? `?${paramStr}` : `&${paramStr}`

      i++
    }

    return queryStr
  }

  getBuiltUrl() {
    const queryStr = this.getQueryString()
    let url = this.getUrl()

    if (queryStr !== '') {
      url =
        url.charAt(url.length - 1) === '/' ? url.substr(0, url.length - 1) : url

      url += queryStr
    }

    return url.trim()
  }

  generateCommand() {
    return `curl ${this.getMethod()} "${this.getBuiltUrl()}" ${this.getHeaders()} ${this.getBody()}`
      .trim()
      .replace(/\s{2,}/g, ' ')
  }
}
