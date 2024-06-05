import { useState, useCallback } from "react";

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    (
      message = "toast notification",
      type = "success",
      position = "top-right"
    ) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        { id: Date.now(), message, type, position },
      ]);
    },
    []
  );

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
  };
};

export default useToast;
