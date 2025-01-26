import styled from 'styled-components';
import CreateNewBoard from './CreateNewBoard';

const StyledCreateNewBoard = styled(CreateNewBoard)`
  padding-left: 14px;
  padding-right: 14px;
  margin-bottom: 20px;

  & > h4 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
    padding-top: 70px;
  }

  & > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 14px 4px 14px 0;

    & > span {
      font-size: 14px;
      font-weight: 500;
    }

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 24px;
      background-color: #b8bcfd;
      width: 40px;
      height: 36px;
      border: none;
      border-radius: 6px;
      padding: 8px;

      &:hover {
        background-color: #979cea;
      }
    }
  }
`;

export default StyledCreateNewBoard;
