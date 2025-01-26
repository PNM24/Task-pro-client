import styled from 'styled-components';
import LogoutSection from './LogoutSection';

const StyledLogoutSection = styled(LogoutSection)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 24px 0 24px 24px;

  button {
    background: none;
    border: none;
    cursor: pointer;

    svg {
      width: 32px;
      height: 32px;
      stroke: currentColor;
      fill: none;
      color: white;
    }

    &:hover svg {
      color: #b8bcfd;
    }
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: white;
  }
`;

export default StyledLogoutSection;
