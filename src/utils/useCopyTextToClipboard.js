import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import showToastNotification from "src/components/ToastNotifications/showToastNotification";

export default function useCopyTextToClipboard() {
  const [isCopied, setCopied] = useState(null);

  useEffect(() => {
    if (isCopied) {
      showToastNotification(`Copied to clipboard.`, { variant: "success" });
    }
  }, [isCopied]);

  function handleCopy(str) {
    copy(str);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 200);
  }

  return [handleCopy];
}
