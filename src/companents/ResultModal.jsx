import React from 'react';

const ResultModal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close result popup">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default ResultModal; 