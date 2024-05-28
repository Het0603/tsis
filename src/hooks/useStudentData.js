import { useFormik } from "formik";
import showToastNotification from "src/components/ToastNotifications/showToastNotification";
import { useAsyncSubmit } from "src/hooks/useAsyncSubmit";
import InquiryService from "src/services/api/InquiryService";
import * as Yup from "yup";

const errorMessage = {
  duration: "Please Select Duration",
  reason: "Please Enter Reason",
};

const buildValidationSchema = () => {
  return Yup.object().shape({
    duration: Yup.string().required(errorMessage.duration),
    reason: Yup.string().required(errorMessage.reason),
  });
};

const initialValues = {
  id: null,
  duration: "",
  reason: "",
  documents: [],
  action: "create",
};

export const useStudentData = (props) => {
  const { open, success, handleClose } = props;

  const { isSubmitting, submit: triggerSubmit } = useAsyncSubmit({
    queryFn: InquiryService.create,
  });
  const { isSubmittingUpdate, submit: triggerSubmitUpdate } = useAsyncSubmit({
    queryFn: InquiryService.update,
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: buildValidationSchema(),
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { resetForm }) => {
      let response;
      switch (values.action) {
        case "create":
          response = await triggerSubmit(values);
          break;
        case "update":
          response = await triggerSubmitUpdate(values?.id, values);
          break;

        default:
          break;
      }

      if (response.error) {
        showToastNotification(
          `Unexpected Error ! Please Try Again After Sometime.`,
          { variant: "error" }
        );
      } else {
        showToastNotification(`Record Create Successfully.`, {
          variant: "success",
        });
        handleClose();
        resetForm();
      }
    },
  });

  return {
    formik,
    isSubmitting,
    isSubmittingUpdate,
    isValid: formik.isValid,
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    setFieldValue: formik.setFieldValue,
    values: formik.values,
    errors: formik.errors,
    setValues: formik.setValues,
  };
};
