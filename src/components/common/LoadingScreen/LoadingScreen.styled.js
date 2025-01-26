import styled from 'styled-components';
import LoadingScreen from './LoadingScreen';

const StyledLoadingScreen = styled(LoadingScreen)`
  width: 100vw;
  height: 100dvh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 80;
  background-color: #093222;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    filter: contrast(80%) brightness(35%);
  }

  h1 {
    display: flex;
    align-items: center;
    gap: 13px;
    color: #fff;
    mix-blend-mode: hard-light;
    z-index: 50;
    font-size: 45px;
    font-weight: 900;
    letter-spacing: 0.04em;

    & > div {
      margin-top: 8px;

      & > svg {
        height: 50px;
        width: 50px;
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 65px;

      & > div {
        margin-top: 12px;

        & > svg {
          height: 65px;
          width: 65px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    h1 {
      font-size: 80px;

      & > div {
        margin-top: 16px;

        & > svg {
          height: 80px;
          width: 80px;
        }
      }
    }
  }
`;

export default StyledLoadingScreen;
