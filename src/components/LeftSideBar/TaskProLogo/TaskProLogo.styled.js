import styled from 'styled-components';
import TaskProLogo from './TaskProLogo';

const StyledTaskProLogo = styled(TaskProLogo)`
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-top: 14px;
  cursor: pointer;

  & > svg {
    height: 32px;
    width: 32px;
  }

  & > span {
    padding: 8px;
  }
`;

export default StyledTaskProLogo;
