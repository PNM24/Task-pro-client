import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
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

  h2 {
    color: #161616;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 24px;
    color: #161616;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
