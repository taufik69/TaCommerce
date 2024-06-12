import { toast, Bounce } from "react-toastify";

export const sucessToast = (
  content = "hello mr taufik",
  postion = "top-left",
  delay = 4000
) => {
  toast.success(content, {
    position: postion,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const ErrorToast = (
  content = "Something is Error",
  postion = "top-right"
) => {
  toast.warn(content, {
    position: postion,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const InfoToast = (
  content = "Something is Info",
  postion = "top-right",
  delay = 4000
) => {
  toast.info(content, {
    postion: postion,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
