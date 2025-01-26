import styled from 'styled-components';

export const SharedLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ecedfd;
  height: 100dvh;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #ecedfd;
`;

export const RightSideDesktop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ecedfd;
  flex: 1; /* Adăugat pentru a preveni strivirea */
  overflow-x: auto;

  @media (min-width: 1440px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
