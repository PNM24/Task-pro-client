import { createPortal } from 'react-dom';
import {
  Button,
  ModalContent,
  ModalOverlay,
} from './ConfirmDeleteModal.styled';

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, projectName }) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay>
      <ModalContent>
        <h2>Confirm Deletion</h2>
        <p>
          Are you sure you want to delete the project &quot;{projectName}&quot;?
        </p>
        <Button
          onClick={onConfirm}
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          Delete
        </Button>
        <Button
          onClick={onClose}
          style={{ backgroundColor: 'gray', color: 'white' }}
        >
          Cancel
        </Button>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

export default ConfirmDeleteModal;
