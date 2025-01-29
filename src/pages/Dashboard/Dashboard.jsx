import { useSelector } from 'react-redux';
import { DashboardContainer, StyledParagraph } from './Dashboard.styled';

const Dashboard = () => {
  const selectedProject = useSelector(state => state.projects.selectedProject);

  console.log("Selected Project:", selectedProject);

  return (
    <DashboardContainer $selectedProject={selectedProject}>
      {selectedProject && selectedProject.title ? (
        <StyledParagraph $selectedProject={selectedProject}>
          {selectedProject.title}
        </StyledParagraph>
      ) : (
        <StyledParagraph>
          Before starting your project, it is essential
          <span> to create a board </span> to visualize and track all the
          necessary tasks and milestones. This board serves as a powerful tool
          to organize the workflow and ensure effective collaboration among team
          members.
        </StyledParagraph>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
