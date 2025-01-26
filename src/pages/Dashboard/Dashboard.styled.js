import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$selectedProject ? 'flex-start' : 'center')};
  justify-content: ${props =>
    props.$selectedProject ? 'flex-start' : 'center'};
  height: calc(100vh - 64px); //! Ajustați în funcție de înălțimea Header-ului
  background-color: #ecedfd;
  padding: 20px;
  text-align: ${props => (props.$selectedProject ? 'left' : 'center')};
  width: 100%;
  background-image: ${props =>
    props.$selectedProject ? `url(${props.$background})` : 'none'};
  background-size: cover;
  background-position: center;
`;

export const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #161616;
  max-width: 335px;
  margin-top: ${props => (props.$selectedProject ? '20px' : '0')};

  span {
    font-weight: bold;
    color: #5255bc;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    max-width: 486px;
  }
`;
