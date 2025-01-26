import { useState } from 'react';
import { createPortal } from 'react-dom';
import StyledLogoutConfirmationModal from '../../LogoutConfirmationModal/LogoutConfirmationModal.styled';
import icons from '../../../assets/icons/icons.svg';

const LogoutSection = ({ className: styles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles}>
      <button onClick={openModal}>
        <svg>
          <use href={`${icons}#icon-logout`}></use>
        </svg>
      </button>
      <span>Log out</span>
      {isModalOpen &&
        createPortal(
          <StyledLogoutConfirmationModal closeModal={closeModal} />,
          document.body
        )}
    </div>
  );
};

export default LogoutSection;
