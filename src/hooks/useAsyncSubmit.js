import { useState } from "react";

export function useAsyncSubmit({ queryFn }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (...queryFnArgs) => {
    setIsSubmitting(true);

    try {
      const apiData = await queryFn(...queryFnArgs);

      setIsSubmitting(false);
      return {
        error: false,
        apiErrorMessage: null,
        apiData,
      };
    } catch (err) {
      setIsSubmitting(false);
      return {
        error: true,
        apiErrorMessage: err.tsisError
          ? err.error.response.data.message
          : `An unexpected error occurred. Please try again`,
        apiData: null,
      };
    }
  };

  return {
    isSubmitting,
    submit,
  };
}
