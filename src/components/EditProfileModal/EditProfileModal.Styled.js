import styled from 'styled-components';
import EditProfileModal from './EditProfileModal';

const StyledEditProfileModal = styled(EditProfileModal)`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modalContent {
    background: white;
    border-radius: 8px;
    padding: 24px;
    width: 335px;
    height: 440px;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 24px;
    text-align: center;
  }

  .avatarUpload {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }

  .avatarButton {
    width: 68px;
    height: 68px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    border: none;
    padding: 0;
    background: none;
    position: relative;
  }

  .userAvatar, .defaultAvatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .defaultAvatar {
    background-color: #F7F6F9;
    display: flex;
    align-items: center;
    justify-content: center;
  }

    form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex-grow: 1;
  }

  input {
    padding: 14px;
    border: 1px solid #DCE3E5;
    border-radius: 8px;
    font-size: 14px;

    &::placeholder {
      color: #DCE3E5;
    }

    &:focus {
      outline: none;
      border-color: #5255BC;
    }
  }

  button[type="submit"] {
    background-color: #5255BC;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 14px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-top: auto;

    &:hover {
      background-color: #3E4090;
    }
  }

  .closeButton {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #161616;
  }

  @media (min-width: 375px) {
    .modalContent {
      width: calc(100% - 40px);
      max-width: 335px;
    }
  }

  @media (min-width: 768px) {
    .modalContent {
      width: 400px;
      max-width: 400px;
    }
  }

  @media (min-width: 1440px) {
    // În cazul în care sunt necesare ajustări specifice pentru desktop
  }
`;

export default StyledEditProfileModal;
