import { useEffect } from 'react';
import StyledLeftSideBar from '../LeftSideBar/LeftSideBar.styled';

const BurgerMenu = ({ className: styles, closeModal }) => {
  // Adăugăm un event listener pentru tasta Esc
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener la demontarea componentului
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className={styles}
      onClick={event => event.currentTarget === event.target && closeModal()}
    >
      <StyledLeftSideBar />
    </div>
  );
};

export default BurgerMenu;
