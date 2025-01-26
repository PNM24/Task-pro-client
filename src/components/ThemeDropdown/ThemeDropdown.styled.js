import styled from 'styled-components';
import ThemeDropdown from './ThemeDropdown';

const StyledThemeDropdown = styled(ThemeDropdown)`
  .react-select-container {
    width: 100px;
  }

  .react-select__control {
    min-height: 36px;
    cursor: pointer;
    border: 0;
    transition: all 0.2s ease;

    &:hover {
      border: 0;
      box-shadow: 0 0 8px rgba(82, 85, 188, 0.5);
    }
  }

  .react-select__value-container {
    padding: 2px 4px;
  }

  .react-select__single-value {
    font-size: 14px;
    font-weight: 500;

    
  }

  .react-select__menu {
    margin-top: 4px;
  }

  .react-select__option {
    font-size: 14px;
    padding: 8px 16px;
    cursor: pointer;
    color: #161616CC;

    &:hover {
      background-color: #F6F6F7;
      border: 0;
      color: #161616;
    }
  }

  .react-select__indicator {
    color: #161616CC;
    transition: color 0.2s ease;

    &:hover {
      color: #161616;
    }
  }
`;

export default StyledThemeDropdown;
