import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-0 left-0 flex items-center bg-light dark:bg-dark border-2 border-red">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
