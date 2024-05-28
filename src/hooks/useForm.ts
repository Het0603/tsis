/**
 * Wrapper around useFormik hook.
 *
 * For valid options:
 * https://formik.org/docs/api/formik
 */
import { FormikConfig, useFormik } from 'formik'
import startCase from 'lodash/startCase'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import useFormErrorAutoScroll from 'src/hooks/useFormErrorAutoScroll'
import useFormErrorLogger from 'src/hooks/useFormErrorLogger'
import { clearFormId, setFormIsSubmitting } from 'src/redux/form/formActions'
import useFormState from 'src/redux/form/useFormState'

export interface UseFormOpts<V> extends FormikConfig<V> {
  scrollElementId?: string | null
}

interface HasErrorOpts {
  ignoreTouched?: boolean
}

export function useForm<V>({
  scrollElementId = null,
  ...formikConfig
}: UseFormOpts<V>) {
  const dispatch = useDispatch()
  const formState = useFormState()

  const wallaFormId = useMemo(() => {
    return new Date().valueOf()
  }, [])

  const formik = useFormik(formikConfig)

  useEffect(() => {
    // const reduxIsSubmitting = formState[wallaFormId]

    // if (
    //   (formik.isSubmitting && !reduxIsSubmitting) ||
    //   (!formik.isSubmitting && reduxIsSubmitting)
    // ) {
      dispatch(setFormIsSubmitting(formik.isSubmitting))
    // }
  }, [dispatch, formik.isSubmitting, formState, wallaFormId])

//   useEffect(() => {
//     return () => {
//       dispatch(clearFormId(wallaFormId))
//     }
//   }, [dispatch, wallaFormId])

  const hasError = useCallback(
    (field: keyof V, { ignoreTouched = false }: HasErrorOpts = {}) => {
      const hasErrorMessage = !!formik.errors[field]
      const hasBeenTouched = ignoreTouched || !!formik.touched[field]

      return hasErrorMessage && hasBeenTouched
    },
    [formik.errors, formik.touched],
  )

  const getError = useCallback(
    (field: keyof V, opts = {}) => {
      if (!hasError(field, opts)) {
        return undefined
      }

      const err = formik.errors[field]
      const words = typeof err === 'string' ? err.split(' ') : []

      words[0] = startCase(words[0])

      return words.join(' ')
    },
    [hasError, formik.errors],
  )

  // Log any validation errors after form submission.
  useFormErrorLogger({
    submitCount: formik.submitCount,
    errors: formik.errors,
  })

  // Auto-scroll to any errors after form submission.
  useFormErrorAutoScroll({
    isSubmitting: formik.isSubmitting,
    submitCount: formik.submitCount,
    errors: formik.errors,
    scrollElementId,
  })

  return useMemo(() => {
    return {
      hasError,
      getError,
      ...formik,
    }
  }, [hasError, getError, formik])
}
