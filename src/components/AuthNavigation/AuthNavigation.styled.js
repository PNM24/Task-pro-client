import styled from 'styled-components';
import AuthNavigation from './AuthNavigation';

const StyledAuthNavigation = styled(AuthNavigation)`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;

  & {
    a {
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: -0.02em;

      color: #ffffff4d;
      transition: all 0.35s ease-in-out;

      & {
        &:hover:not(a.active) {
          color: rgb(190, 219, 176);
          transition: all 0.35s ease-in-out;
        }

        &.active {
          color: #ffffff;
          font-weight: bold;
          transition: all 0.35s ease-in-out;
          cursor: not-allowed;
        }
      }
    }
  }
`;

export default StyledAuthNavigation;
