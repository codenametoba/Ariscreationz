import React from "react";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white max-w-lg w-full p-8 rounded-3xl shadow-lg relative">
        {/* Title */}
        <h2 className="text-2xl font-bold text-purple-900 mb-6">{title}</h2>

        {/* Content */}
        <div className="text-gray-700 overflow-y-auto max-h-60 mb-6">
          {content}
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition"
          >
            Accept
          </button>
        </div>

        {/* Decorative Circle */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default Modal;
