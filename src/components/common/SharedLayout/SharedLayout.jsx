import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import StyledHeader from '../../Header/Header.styled';
import { refreshUser } from '../../../redux/auth/operations';
import useResponsive from '../../../hooks/useResponsive';
import StyledLeftSideBar from '../../LeftSideBar/LeftSideBar.styled';
import {
  SharedLayoutContainer,
  HeaderWrapper,
  RightSideDesktop,
} from './SharedLayout.styled';

const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isOnDesktop } = useResponsive();

  return (
    <SharedLayoutContainer>
      {isOnDesktop && <StyledLeftSideBar />}

      <RightSideDesktop>
        <HeaderWrapper>
          <StyledHeader />
        </HeaderWrapper>
        <Outlet /> {/* Afișăm conținutul rutei copil */}
      </RightSideDesktop>
    </SharedLayoutContainer>
  );
};

export default SharedLayout;
