import styled from 'styled-components';
import NeedHelp from './NeedHelp';

const StyledNeedHelp = styled(NeedHelp)`
  background-color: rgba(236, 237, 253, 0.4);
  margin: 20px 14px 0 14px;
  padding: 0 14px;
  border-radius: 8px;
  cursor: pointer;

  & > p {
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 18px;

    & > span {
      color: #5255bc;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    padding-bottom: 14px;

    & > svg {
      width: 20px;
      height: 20px;
      stroke: currentColor;
      fill: none;
      color: white;
      margin-right: 8px;
    }

    & > span {
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

export default StyledNeedHelp;
