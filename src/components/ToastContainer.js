"use client";

import React from "react";
import Toast from "./Toast";

const positionClasses = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "top-center": "top-4 left-1/2 transform -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div>
      {Object.entries(positionClasses).map(([position, classes]) => (
        <div
          key={position}
          className={`fixed z-50 ${classes} flex flex-col space-y-2`}
        >
          {toasts
            .filter((toast) => toast.position === position)
            .map((toast) => (
              <Toast
                key={toast.id}
                type={toast.type}
                message={toast.message}
                onClose={() => removeToast(toast.id)}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
