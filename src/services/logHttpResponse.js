/* eslint-disable no-console */
// import AxiosCurlHelper from 'services/AxiosCurlHelper';
// import rewriteProxyPath from 'services/rewriteProxyPath'

import AxiosCurlHelper from "./AxiosCurlHelper"
import rewriteProxyPath from "./rewriteProxyPath"

export default function logHttpResponse({ isError = false, axiosResponse }) {
  const { config: axiosConfig, status } = axiosResponse
  const method = axiosConfig.method.toUpperCase()

  console.groupCollapsed(
    `%c[SHUNSHINE-GROUP-OF-INSTITUTE] HTTP ${status} ${method} ${axiosConfig.url}`,
    `color: ${getColor(method, isError)};`,
  )

  logRequest(axiosResponse)
  logResponse(axiosResponse)
  logCurl(axiosResponse)

  console.groupEnd()
}

function logRequest(axiosResponse) {
  const { config: axiosConfig } = axiosResponse
  const method = axiosConfig.method.toUpperCase()
  const url = rewriteProxyPath(
    axiosConfig.baseURL + axiosConfig.url,
  )

  console.log(new Date())
  console.log(`${method} ${url}`)

  if (axiosConfig.params) {
    console.groupCollapsed('Params')
    logObj(axiosConfig.params, { indented: true })
    console.groupEnd()
  }

  if (axiosConfig.data) {
    const { data } = axiosConfig
    const isFormData = data instanceof FormData
    const body = isFormData ? getFormDataObj(data) : getParsedJson(data)

    console.groupCollapsed(`Body (${isFormData ? 'FormData' : 'JSON'})`)
    logObj(body, { indented: true })
    console.groupEnd()
  }
}

function logResponse(axiosResponse) {
  const { status, statusText } = axiosResponse

  console.groupCollapsed(`Response ${status} ${statusText}`)
  console.log(axiosResponse.data)
  console.groupEnd()

  console.groupCollapsed(`Response ${status} ${statusText} - Formatted`)
  logObj(axiosResponse.data, { indented: true })
  console.groupEnd()

  console.groupCollapsed(`Response ${status} ${statusText} - Raw`)
  logObj(axiosResponse.data)
  console.groupEnd()
}

function logCurl(axiosResponse) {
  const { config: axiosConfig } = axiosResponse
  const curlHelper = new AxiosCurlHelper(axiosConfig)

  console.groupCollapsed('cURL')
  console.log(curlHelper.generateCommand())
  console.groupEnd()
}

function logObj(obj, opts = {}) {
  const { indented = false } = opts

  console.log(indented ? JSON.stringify(obj, null, 2) : JSON.stringify(obj))
}

function getFormDataObj(formData) {
  try {
    const obj = {}

    // eslint-disable-next-line no-restricted-syntax
    for (const pair of formData) {
      const [key, value] = pair

      obj[key] = value
    }

    return obj
  } catch (err) {
    return null
  }
}

function getParsedJson(data) {
  try {
    return JSON.parse(data)
  } catch (err) {
    return null
  }
}

function getColor(method, isError) {
  const formMethods = ['PATCH', 'PUT', 'POST', 'DELETE']

  let color = ''

  if (formMethods.includes(method)) {
    color = '#1eb7a1'
  }

  if (isError) {
    color = '#d75b3c'
  }

  return color
}
