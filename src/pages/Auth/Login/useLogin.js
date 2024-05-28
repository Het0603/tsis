import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import showToastNotification from "src/components/ToastNotifications/showToastNotification";
import { login } from "src/redux/auth/authActions";
import AuthService from "src/services/api/AuthService";
import * as yup from "yup";

const loginValidationSchema = () => {
  return yup.object().shape({
    username: yup.string().required("Username is Required"),
    password: yup.string().required("Password is Required"),
  });
};

const initialValues = {
  username: "",
  password: "",
};

export const useLogin = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: loginValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
    onSubmit: async (values, { ressetForm }) => {
      try {
        const result = await AuthService.createSession(values);
        if (result) {
          dispatch(login(values.username, result?.access));
        }
      } catch (e) {
        console.log(e);
        showToastNotification(
          `Unexpected Error ! Please Try Again After Sometime.`,
          { variant: "error" }
        );
      }
    },
  });

  return {
    onSubmit: formik.handleSubmit,
    isSubmitting: formik.isSubmitting,
    errors: formik.errors,
    values: formik.values,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    resetForm: formik.resetForm,
  };
};
