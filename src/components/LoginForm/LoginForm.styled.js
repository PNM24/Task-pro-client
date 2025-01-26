import styled from 'styled-components';
import LoginForm from './LoginForm';

const StyledLoginForm = styled(LoginForm)`
  background-color: rgba(21, 21, 21, 1);
  border-radius: 8px;
  padding: 24px;

  & {
    form {
      & {
        div.field {
          margin-bottom: 14px;
          height: 67px;
          position: relative;

          & {
            input {
              background-color: rgba(31, 31, 31, 1);
              border-radius: 8px;
              appearance: none;
              outline: none;
              width: 100%;
              padding: 14px 18px;
              border: 1px solid rgba(190, 219, 176, 1);
              box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
              font-size: 14px;
              font-weight: 400;
              line-height: 21px;
              letter-spacing: -0.02em;
              opacity: 0.4;
              transition: all 0.35s ease-in-out;
              color: rgba(255, 255, 255, 1);

              &::placeholder {
                color: rgba(255, 255, 255, 1);
                transition: all 0.35s ease-in-out;
              }

              &:focus {
                transition: all 0.35s ease-in-out;
                opacity: 1;
              }
            }

            div.error {
              color: #ff003b;
              font-style: italic;
              font-size: 12px;
              margin-top: 2px;
              text-transform: lowercase;
            }

            div.showPassword {
              position: absolute;
              top: 11px;
              right: 18px;
              opacity: 0.4;
              transition: all 0.35s ease-in-out;
              cursor: pointer;

              &:hover {
                opacity: 1;
                transition: all 0.35s ease-in-out;
              }
            }
          }
        }

        div.field:nth-last-of-type(1) {
          margin-bottom: 24px;
        }

        div.field.onError {
          & {
            input {
              border: 1px solid #ff003b;
              opacity: 1;
            }

            div.showPassword {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 424px;
    margin: 0 auto;
    padding: 40px;
  }
`;

export default StyledLoginForm;
