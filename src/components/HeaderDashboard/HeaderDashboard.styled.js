import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: transparent;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #161616;
  margin: 0;
`;

export const FiltersButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  color: inherit;

  &:hover {
    color: #5255bc;
  }
`;

export const FilterIcon = styled.div`
  font-size: 24px;
  margin-right: 8px;

  svg {
    fill: currentColor;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  margin: 0;
`;
