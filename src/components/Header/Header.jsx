import { useState } from 'react';
import StyledUserInfo from '../UserInfo/UserInfo.styled';
import StyledThemeDropdown from '../ThemeDropdown/ThemeDropdown.styled';
import useResponsive from '../../hooks/useResponsive';
import useAuth from '../../hooks/useAuth';
import StyledBurgerMenuBtn from '../BurgerMenuBtn/BurgerMenuBtn.styled';
import StyledEditProfileModal from '../EditProfileModal/EditProfileModal.Styled';

const Header = ({ className: styles }) => {
  const { isOnMobile, isOnTablet } = useResponsive();
  const { theme, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`${styles} ${theme}`}>
      <div className="headerContent">
        {(isOnMobile || isOnTablet) && <StyledBurgerMenuBtn />}
        <div className="dropdownAndUser">
          <StyledThemeDropdown />
          <StyledUserInfo
  user={{...user, name: user.name}}
  openModal={() => setIsModalOpen(true)}
/>
        </div>
      </div>
      {isModalOpen && <StyledEditProfileModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Header;
