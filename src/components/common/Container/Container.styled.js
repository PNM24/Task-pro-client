import styled from 'styled-components';

const Container = styled.div`
  /* min-width: 320px; */
  min-width: 375px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    /* width: 768px; */
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    /* width: 1440px; */
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default Container;
