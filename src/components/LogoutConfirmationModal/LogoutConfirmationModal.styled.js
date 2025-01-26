import styled from 'styled-components';
import LogoutConfirmationModal from './LogoutConfirmationModal';

const StyledLogoutConfirmationModal = styled(LogoutConfirmationModal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Background semi-transparent */
  display: flex;
  justify-content: center;
  align-items: center;

  .modalContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #151515;
    padding: 24px;
    border-radius: 8px;
    max-width: 355px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: 500;
    gap: 40px;
    .text {
      color: rgba(255, 255, 255, 0.3);
    }
    .logout {
      color: white;
    }

    @media (min-width: 375px) {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      padding: 40px;
      max-width: 424px;
    }
  }

  .buttonWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
  }
`;

export default StyledLogoutConfirmationModal;
