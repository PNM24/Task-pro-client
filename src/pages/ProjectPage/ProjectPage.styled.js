import styled from 'styled-components';

export const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$selectedProject ? 'flex-start' : 'center')};
  justify-content: ${props =>
    props.$selectedProject ? 'flex-start' : 'center'};
  height: calc(100vh - 64px);
  background-color: ${props => (props.$background ? 'transparent' : '#ecedfd')};
  background-image: ${props =>
    props.$background ? `url(${props.$background})` : 'none'};
  background-size: cover;
  background-position: center;
  padding: 20px;
  text-align: ${props => (props.$selectedProject ? 'left' : 'center')};
  width: 100%;
  overflow: hidden; /* Adăugat pentru a preveni overflow */
`;

export const ColumnsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  overflow-x: auto;
  padding: 20px 0;
  width: 100%;
  flex-wrap: nowrap;

  /* Stil pentru a păstra un spațiu între coloane și butonul de jos */
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrat butonul sub coloană */
  }

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px; /* Adjust the height as needed */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(80, 80, 160, 0.7); /* Customize the color */
    border-radius: 4px; /* Adjust the border radius as needed */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(80, 80, 160, 0.9); /* Change color on hover */
  }

  &::-webkit-scrollbar-track {
    background: rgba(200, 200, 200, 0.3); /* Customize the track color */
  }
`;

export const Column = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  min-width: 335px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: auto;
  align-items: center;
  margin-bottom: 14px;

  .column-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; /* Să ocupe toată lățimea coloanei */
  }

  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  flex-grow: 1; /* Asigură că se întinde pe toată înălțimea disponibilă */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomButton = styled.button`
  height: 56px;
  min-width: 335px; /* Ensure the button has a minimum width */
  padding: 14px;
  background-color: #ffffff;
  color: #161616;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5px;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  /* Setăm tranzițiile pe proprietățile care se schimbă */
  transition: transform 0.3s ease-out, background-color 0.3s ease-out,
    color 0.3s ease-out, box-shadow 0.3s ease-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #8385d1;
    z-index: -1;
    transition: width 0.35s ease-out;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: #ffffff;
    transform: scale(1.02); /* Scalează puțin mai vizibil */
  }

  &:hover:not(:disabled) {
    box-shadow: 0px 6px 12px 0px rgba(131, 133, 209, 0.8); /* Umbra mai mare și mai subtilă */
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .plus-icon svg {
    margin-right: 8px;
    fill: #5255bc;
    transition: fill 0.3s ease-out; /* Tranziție pentru iconiță */
  }
`;

export const IconsSection = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditIconButton = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    color: rgba(22, 22, 22, 0.5);
    fill: rgba(22, 22, 22, 0.5);
    transition: color 0.3s ease-out, fill 0.3s ease-out;
  }

  &:hover svg {
    color: black;
    fill: black;
  }
`;
