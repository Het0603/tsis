import { toast } from "react-hot-toast";

export default function showToastNotification(message, opts = {}) {
  const { variant } = opts;

  switch (variant) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
      break;
  }
}
