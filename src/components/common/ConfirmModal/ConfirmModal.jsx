import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalContent, Button } from './ConfirmModal.styled';

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
}) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = event => {
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay className="modal-overlay" onClick={handleOverlayClick}>
      <ModalContent>
        <h2>{title}</h2>
        <p>{message}</p>
        <Button
          onClick={onConfirm}
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          {confirmText}
        </Button>
        <Button
          onClick={onClose}
          style={{ backgroundColor: 'gray', color: 'white' }}
        >
          {cancelText}
        </Button>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
};

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
};

export default ConfirmModal;
