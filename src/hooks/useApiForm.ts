import { FormikHelpers } from "formik";
import { useState } from "react";

export interface ApiFormResult<V> {
  apiData: any;
  values: V;
  formikHelpers: FormikHelpers<V>;
  metadata: {
    [key: string]: any;
  };
}

export interface ApiFormSubmitFnResult {
  error: boolean;
  errors: { [key: string]: any[] } | null;
  apiData: any;
  apiErrorCode: string | null;
  apiErrorMessage: string | null;
  apiStatusCode: number;
  metadata?: {
    [key: string]: any;
  };
}

// @ts-ignore
export interface UseApiFormOpts<V> extends Omit<UseFormOpts<V>, "onSubmit"> {
  initialValues?: V;
  getInitialValues?: Function;
  validationSchema?: any;
  getValidationSchema?: Function;
  submitFn: (
    values: V,
    formikHelpers: FormikHelpers<V>
  ) => Promise<ApiFormSubmitFnResult>;
  onSuccess?: (result: ApiFormResult<V>) => Promise<void>;
}

export default function useApiForm<V>({
  initialValues,
  getInitialValues,
  validationSchema,
  getValidationSchema,
  submitFn,
  onSuccess,
  ...useFormProps
}: UseApiFormOpts<V>) {
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null);
  const [apiStatusCode, setApiStatusCode] = useState<number | null>(null);
  const [apiErrorCode, setApiErrorCode] = useState<string | null>(null);

  const form = useForm({
    initialValues:
      initialValues || (getInitialValues ? getInitialValues() : {}),
    validationSchema:
      validationSchema ||
      (getValidationSchema ? getValidationSchema() : undefined),
    onSubmit: async (values, formikHelpers) => {
      setApiErrorMessage(null);

      const result = await submitFn(values, formikHelpers);

      setApiStatusCode(result.apiStatusCode);

      if (result.error) {
        let hasFieldError = false;

        // Parse API errors and set error message on individual form fields.
        if (result.errors) {
          Object.keys(result.errors).forEach((field) => {
            // @ts-ignore
            if (values[field] && result.errors && result.errors[field]) {
              const { error } = first(result.errors[field]) || {};

              if (error) {
                formikHelpers.setFieldError(
                  field,
                  getApiErrorMessage(field, error)
                );

                hasFieldError = true;
              }
            }
          });
        }

        // If API errors do not match individual form fields, then display and auto-scroll to an error alert.
        if (!hasFieldError) {
          formikHelpers.setFieldError(
            "wallaErrorAlert",
            "Encountered an API error."
          );

          setApiErrorMessage(result.apiErrorMessage);
        }

        setApiErrorCode(result.apiErrorCode);

        return;
      }

      if (onSuccess) {
        await onSuccess({
          apiData: result.apiData,
          values,
          formikHelpers,
          metadata: {
            ...result.metadata,
          },
        });
      }
    },
    ...useFormProps,
  });
}
