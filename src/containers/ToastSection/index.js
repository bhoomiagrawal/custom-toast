"use client";

import React from "react";
import ToastContainer from "../../components/ToastContainer";
import useToast from "../../hooks/useToast";

const ToastSection = () => {
  const { toasts, addToast, removeToast } = useToast();

  const showToast = (type, position) => () => {
    addToast(`This is a ${type} message!`, type, position);
  };

  return (
    <div className="min-h-screen flex items-start justify-start bg-gray-200 p-8">
      <div className="w-full max-w-xs bg-white p-6 shadow-md rounded-lg space-y-4  ">
        <div className="flex flex-col space-y-4">
          <button
            onClick={showToast("success", "top-right")}
            className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-600 text-sm md:text-base lg:text-base"
          >
            Success (Top Right)
          </button>
          <button
            onClick={showToast("warning", "top-left")}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 text-sm md:text-base lg:text-base"
          >
            Warning (Top Left)
          </button>
          <button
            onClick={showToast("error", "top-center")}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm md:text-base lg:text-base"
          >
            Error (Top Center)
          </button>
          <button
            onClick={showToast("info", "bottom-center")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm md:text-base lg:text-base"
          >
            Info (Bottom Center)
          </button>
        </div>
      </div>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
};

export default ToastSection;
