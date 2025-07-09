import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const toastSuccess = (msg: string) => {
  Toast.fire({
    icon: "success",
    title: msg,
    background: "#3ea800ff",
    color: "#ffffff",
  });
};

const toastError = (msg: string) => {
  Toast.fire({
    icon: "error",
    title: msg,
    background: "#b80000ff",
    color: "#ffffff",
  });
};

const toastWarning = (msg: string) => {
  Toast.fire({
    icon: "warning",
    title: msg,
    background: "#b35300ff",
    color: "#ffffff",
  });
};

const toastInfo = (msg: string) => {
  Toast.fire({
    icon: "info",
    title: msg,
    background: "#0097c9ff",
    color: "#ffffff",
  });
};

export const toast = {
  success: toastSuccess,
  error: toastError,
  warning: toastWarning,
  info: toastInfo,
};
