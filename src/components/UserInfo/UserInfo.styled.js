import styled from 'styled-components';
import UserInfo from './UserInfo';

const StyledUserInfo = styled(UserInfo)`
  display: flex;
  align-items: center;
  gap: 8px;

  .userName {
    font-size: 14px;
    font-weight: 500;
  }

  .avatarButton {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    border: none;
    padding: 0;
    background: none;
    transition: all 0.2s ease;

    &:hover {
      box-shadow: 0 0 8px rgba(82, 85, 188, 0.5);
    }
  }

  .userAvatar, .defaultAvatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .defaultAvatar {
    display: block;
  }
`;

export default StyledUserInfo;
