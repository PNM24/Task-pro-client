import { createPortal } from 'react-dom';
import StyledBurgerMenu from '../BurgerMenu/BurgerMenu.styled';
import { useState } from 'react';
import icons from '../../assets/icons/icons.svg';

const BurgerMenuBtn = ({ className: styles }) => {
  // todo: => aici vine botunul burger menu

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsBurgerMenuOpen(true)} className={styles}>
        <svg width="24" height="24">
          <use href={`${icons}#icon-burger-menu`}></use>
        </svg>
      </button>

      {isBurgerMenuOpen &&
        createPortal(
          <StyledBurgerMenu closeModal={() => setIsBurgerMenuOpen(false)} />,
          document.body
        )}
    </>
  );
};

export default BurgerMenuBtn;
