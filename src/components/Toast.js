"use client";

import React, { useEffect } from "react";
import {
  XMarkIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const Toast = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
      case "warning":
        return <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500" />;
      case "error":
        return <XCircleIcon className="w-6 h-6 text-red-500" />;
      case "info":
        return <InformationCircleIcon className="w-6 h-6 text-blue-500" />;
      default:
        return null;
    }
  };

  const getUnderlineColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      case "info":
        return "bg-blue-500";
      default:
        return "";
    }
  };

  return (
    <div className="p-4 rounded shadow-lg transition transform duration-500 ease-in-out animate-slide-in-out border border-gray-300 bg-white relative mb-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {getIcon()}
          <span className="text-black ml-2">{message}</span>
        </div>
        <button onClick={onClose} className="ml-4 hover:text-gray-500">
          <XMarkIcon className="w-5 h-5 text-black hover:text-gray-500" />
        </button>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-1 ${getUnderlineColor()} animate-underline`}
      ></div>
    </div>
  );
};

export default Toast;
