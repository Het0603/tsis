import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { BootstrapDialog } from "./BoostrapDialog";
import BootstrapDialogTitle from "./BoostrapDialogTitle";
import { DialogContent } from "@mui/material";

function BaseDailogView(props: any, ref: any) {
  const { children, title, size, customWidth } = props;

  useImperativeHandle(ref, () => ({ open, close }));

  const modalRef = useRef(null);

  const [show, setShow] = useState(false);
  const [maxWidth, setMaxWidth] = useState(600);

  const open = () => {
    setShow(true);
  };
  const close = () => {
    setShow(false);
  };

  useEffect(() => {
    if (size === "lg") {
      setMaxWidth("95%");
    }

    if (size === "md") {
      setMaxWidth("75%");
    }

    if (size === "sm") {
      setMaxWidth("65%");
    }

    if (size) {
      setMaxWidth(size);
    }
  }, [size]);

  return (
    <>
      <BootstrapDialog
        ref={modalRef}
        open={show}
        onClose={() => setShow(false)}
        sx={{
          display: maxWidth === "sm" ? "flex" : "",
          justifyContent: "center",
          alignItems: "center",
          overflow: "scroll",
          zIndex: 1,
        }}
        PaperProps={{
          style: { borderRadius: 15 },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => setShow(false)}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent>{children}</DialogContent>
      </BootstrapDialog>
    </>
  );
}

const BaseDailog = forwardRef(BaseDailogView);

export { BaseDailog };
