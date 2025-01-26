import styled from 'styled-components';
import LeftSideBar from './LeftSideBar';

const StyledLeftSideBar = styled(LeftSideBar)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #5255bc;
  color: white;
  height: 100dvh;
  width: 225px;
  flex-shrink: 0;
  overflow: hidden;

  .project-list-container {
    flex: 1;
    overflow-y: auto;

    /* Scrollbar styling */
    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.7);
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  @media (min-width: 768px) {
    width: 260px;
  }
`;

export default StyledLeftSideBar;
