import styled from 'styled-components';
import HomePage from './HomePage';

const StyledHomePage = styled(HomePage)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  padding-top: 30px;
  padding-bottom: 30px;

  & > div {
    flex: 1;
    max-height: 100%;

    & {
      div.logo {
        & {
          a {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 14px;
            cursor: pointer;

            & {
              div.logo-text {
                display: flex;
                gap: 14px;
                align-items: center;

                & {
                  svg {
                    width: 40px;
                    height: 40px;
                  }

                  span {
                    font-size: 28px;
                    font-weight: 600;
                    line-height: 42px;
                    letter-spacing: -0.04em;
                    color: #161616;
                  }
                }
              }
            }
          }
        }
      }

      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.02em;
        text-align: center;
        color: #161616;
        width: 335px;
        margin: 24px auto 48px auto;
      }

      div.buttonsWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
    }
  }

  @media (min-width: 768px) {
    & > div {
      & {
        div.logo {
          & {
            a {
              gap: 24px;

              & {
                img {
                  height: 162px;
                }

                div.logo-text {
                  & {
                    svg {
                      width: 48px;
                      height: 48px;
                    }

                    span {
                      font-size: 40px;
                      line-height: 60px;
                    }
                  }
                }
              }
            }
          }
        }

        p {
          width: 473px;
        }
      }
    }
  }
`;

export default StyledHomePage;
