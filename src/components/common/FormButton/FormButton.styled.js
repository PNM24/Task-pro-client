import styled from 'styled-components';
import FormButton from './FormButton';

const StyledFormButton = styled(FormButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; // Adaugă spațiu între SVG și text
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all 0.35s ease-in-out;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: center;
  border-radius: 8px;
  width: 100%;
  height: 49px;
  color: #161616;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    transition: all 0.35s ease-in-out;
    z-index: -1;
  }

  &:hover:not(:disabled) {
    transition: all 0.35s ease-in-out;
    &:before {
      width: 100%;
    }
  }

  &:disabled {
    background-color: grey;
    opacity: 0.5;
    box-shadow: none;
    cursor: not-allowed;
    transition: all 0.35s ease-in-out;
  }
`;

const GreenButton = styled(StyledFormButton)`
  background-color: #bedbb0;

  &:before {
    background-color: #9dc888;
  }

  &:hover:not(:disabled) {
    color: #ffffff;
    scale: 1.02;
    box-shadow: 0px 4px 10px 0px #bedbb0;
    border: 2px solid #e0e0e0;
  }

  &:active:not(:disabled) {
    scale: 1.04;
    transition: all 0.35s ease-in-out;
  }
`;

const VioletButton = styled(StyledFormButton)`
  background-color: #b8bcfd;

  &:before {
    background-color: #5255bc;
  }

  &:hover:not(:disabled) {
    color: #ffffff;
    scale: 1.02;
    box-shadow: 0px 4px 10px 0px #b8bcfd;
    border: 1px solid #ffffff;
  }

  &:active:not(:disabled) {
    scale: 1.04;
    transition: all 0.35s ease-in-out;
  }
`;

const ButtonOnHomePage = styled(StyledFormButton)`
  width: 335px;
  background-color: #ffffff;

  &:before {
    background-color: #161616;
  }

  &:hover:not(:disabled) {
    color: #ffffff;
    box-shadow: 0px 4px 10px 0px #161616;
    scale: 1.02;
  }

  &:active:not(:disabled) {
    scale: 1.05;
    transition: all 0.35s ease-in-out;
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`;

export { GreenButton, VioletButton, ButtonOnHomePage };
