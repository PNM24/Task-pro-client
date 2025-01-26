import styled from 'styled-components';
import EditColumn from './EditColumn';

const StyledEditColumn = styled(EditColumn)`
  &.modal-overlay {
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

  .modal-content {
    background-color: white;
    border-radius: 8px;
    padding: 24px;
    width: 100%;
    max-width: 90%;
    height: auto;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;

    @media (min-width: 320px) and (max-width: 374px) {
      padding: 20px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
      max-width: 335px;
    }

    @media (min-width: 768px) {
      width: 350px;
      max-height: 433px;
    }
  }

  h2 {
    color: #161616;
    margin-bottom: 24px;
  }

  .close-button {
    position: absolute;
    top: 14px;
    right: 14px;
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    svg {
      fill: #161616;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .field {
    position: relative;
    margin-bottom: 24px;
  }

  input,
  .field input {
    padding: 14px 18px;
    border: 1px solid #5255BC;
    border-radius: 8px;
    background-color: white;
    color: #161616;
    width: 100%;
  }

  input:focus,
  .field input:focus {
    outline: none;
    border-color: #8385D1;
  }

  .field.onError input {
    border-color: #E74A3B;
  }

  .error {
    position: absolute;
    bottom: -20px;
    left: 14px;
    color: #E74A3B;
    font-size: 12px;
  }

  .edit-button {
    height: 49px;
    width: 100%;
    padding: 14px;
    background-color: #5255BC;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5px;
    font-weight: 500;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;

    &:hover {
      background-color: #8385D1;
      transform: scale(1.01);
    }

    &:before {
      background-color: #8385D1;
    }

    &:hover:not(:disabled) {
      scale: 1.02;
      box-shadow: 0px 4px 10px 0px #8385D1;
      border: 0;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    svg {
      margin-right: 8px;

      .icon-plus-background {
        fill: white;
      }

      .icon-plus-symbol {
        stroke: #5255BC;
      }
    }
  }
`;

export default StyledEditColumn;
