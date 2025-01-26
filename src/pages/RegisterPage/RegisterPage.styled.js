import styled from 'styled-components';
import RegisterPage from './RegisterPage';

const StyledRegisterPage = styled(RegisterPage)`
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
  }
`;

export default StyledRegisterPage;
