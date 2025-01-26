import styled from 'styled-components';
import Header from './Header';

const StyledHeader = styled(Header)`
  padding: 14px 20px;

  .headerContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
  }

  .dropdownAndUser {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: auto;
  }

  // Stiluri pentru dropdown-ul de temă (presupunând că folosești react-select)
  .react-select-container {
    width: 120px;
  }

  .react-select__control {
    border-radius: 8px;
    min-height: 32px;
    /* border: 1px solid #BEDBB0; */
  }

  .react-select__value-container {
    padding: 2px 8px;
  }

  .react-select__single-value {
    font-size: 14px;

  }

  // Teme de culori
  &.light {
    background-color: #FFFFFF;
    color: #161616;
  }

  &.dark {
    background-color: #161616;
    color: #FFFFFF;
  }

  &.violet {
    background-color: #5255BC;
    color: #FFFFFF;
  }

  // Media queries pentru responsive design
  @media (min-width: 375px) {
    padding: 18px 20px;
  }

  @media (min-width: 768px) {
    padding: 18px 32px;
  }

  @media (min-width: 1440px) {
    padding: 18px 24px;

    .headerContent {
      justify-content: flex-end;
    }
  }
`;

export default StyledHeader;
