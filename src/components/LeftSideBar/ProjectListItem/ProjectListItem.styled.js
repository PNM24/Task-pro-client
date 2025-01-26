import styled from 'styled-components';

export const ProjectIcon = styled.div`
  width: 18px;
  height: 18px;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
    color: rgba(255, 255, 255, 0.5);
    transition: fill 0.3s, color 0.3s;
  }
`;

export const IconsSection = styled.div`
  display: none; /* Ascunde inițial */
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

export const StyledProjectListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 14px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  position: relative; /* Necesare pentru bara albă */

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);

    ${IconsSection} {
      display: flex;
    }

    ${ProjectIcon} svg {
      color: white;
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: white;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }
`;

export const ProjectSectionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: white;
  }
`;

export const EditIconButton = styled.button`
  width: 16px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
    color: rgba(255, 255, 255, 0.5);
    transition: fill 0.3s, color 0.3s;
  }

  &:hover svg {
    color: white;
  }
`;
