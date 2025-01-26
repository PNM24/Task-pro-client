import styled from "styled-components";
import ExitModal from "./ExitModal";

const StyledExitModal = styled(ExitModal)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 78px;
  /* top: 0; */
  z-index: 10;
  padding: 80px 20px;
  background-color: #ffffff;
  overflow: auto;

  & {
    div.modalContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 45px;

      & {
        .closeBtn {
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 40px;
          padding: 10px 20px;
          background-color: #eff1f3;

          & {
            button {
              width: 20px;
              height: 20px;
              background: transparent;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.35s ease-in-out;

              & {
                &:hover {
                  opacity: 0.8;
                  transition: all 0.35s ease-in-out;
                  scale: 1.5;
                }

                &:hover {
                  svg {
                    color: #ff003b;
                    transition: all 0.35s ease-in-out;
                  }
                }

                svg {
                  color: #000000;
                  transition: all 0.35s ease-in-out;
                }
              }
            }
          }
        }

        h2 {
          font-size: 23px;
          line-height: 25.2px;
          color: #212121;
          text-align: center;
        }

        div.buttonWrapper {
          margin-top: 70px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    background-color: rgba(33, 33, 33, 0.5);
    top: 0;
    display: grid;
    place-items: center;

    & {
      div.modalContent {
        position: relative;
        padding: 60px 60px;
        background-color: #ffffff;
        border: 2px solid orange;
        box-shadow: 0px 22px 40px 0px #fc842d80;
        width: 620px;

        & {
          .closeBtn {
            background-color: transparent;
            top: 20px;
            right: 20px;
            padding: 0;
            width: 25px;
            height: 25px;

            & {
              button {
                width: 100%;
                height: 100%;
                border-radius: 50%;

                &:hover {
                  background-color: #eff1f3;
                }

                svg {
                  width: 100%;
                  height: 100%;
                  color: #000000;
                }
              }
            }
          }

          h2 {
            font-size: 27px;
            line-height: 38px;
          }

          div.buttonWrapper {
            flex-direction: row;
            gap: 18px;
            margin-top: 80px;
          }
        }
      }
    }
  }
`;

export default StyledExitModal;
