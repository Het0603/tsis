import flow from 'lodash/fp/flow'
import mapValuesFp from 'lodash/fp/mapValues'
import pickByFp from 'lodash/fp/pickBy'
import isArray from 'lodash/isArray'
import isDate from 'lodash/isDate'
import isEqual from 'lodash/isEqual'
import sortBy from 'lodash/sortBy'
import { useSearchParams } from 'react-router-dom'
import { formatIsoDate } from 'src/utils/date/formatIsoDate'

export function useUrlParams({
  disablePageReset = false,
  parseUrlParams,
  navigateOptions,
}) {
  const [searchParams, setSearchParams] = useSearchParams()

  const urlParams = parseUrlParams(searchParams)

  const setUrlParams = (params) => {
    const transform = flow(
      mapValuesFp((value) => {
        if (isArray(value)) {
          return sortBy(value).join(',')
        }

        if (isDate(value)) {
          return formatIsoDate(value)
        }

        return value
      }),
      pickByFp((value) => !!value),
    )

    const newParams = transform({
      ...urlParams,
      ...params,
    })

    setSearchParams(newParams, navigateOptions)
  }

  const setUrlParam = (key, value) => {
    // Prevent navigating to a new url if the value didn't change.
    // Use lodash.isEqual() for deep equality of arrays.
    if (isEqual(urlParams[key], value)) {
      return
    }

    const newParams = { [key]: value }

    if (!disablePageReset) {
      newParams.page = 1
    }

    setUrlParams(newParams)
  }

  return {
    urlParams,
    setUrlParam,
    setUrlParams,
  }
}
