import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';

const StyledBurgerMenu = styled(BurgerMenu)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Background semi-transparent */
  display: flex;
  align-items: flex-start; /* Aliniere la început pentru a fixa sidebar-ul sus */
`;

export default StyledBurgerMenu;
