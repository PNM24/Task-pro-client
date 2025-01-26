import useAuth from '../../hooks/useAuth';
import StyledTaskProLogo from './TaskProLogo/TaskProLogo.styled';
import StyledCreateNewBoard from './CreateNewBoard/CreateNewBoard.styled';
import ProjectList from './ProjectList/ProjectList'; // Import corect
import StyledNeedHelp from './NeedHelp/NeedHelp.styled';
import StyledLogoutSection from './LogoutSection/LogoutSection.styled';

const LeftSideBar = ({ className: styles }) => {
  const { theme } = useAuth();

  return (
    <div className={`${styles} ${theme}`}>
      {/* Task Pro Logo */}
      <StyledTaskProLogo />
      {/* Create A New Board */}
      <StyledCreateNewBoard />
      {/* Transmitem lista de proiecte */}
      <div className="project-list-container">
        <ProjectList />
      </div>
      {/* Need Help */}
      <StyledNeedHelp />
      {/* Logout Section */}
      <StyledLogoutSection />
    </div>
  );
};

export default LeftSideBar;
