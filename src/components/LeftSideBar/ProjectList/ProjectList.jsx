import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUserProjects,
  deleteProject,
} from '../../../redux/slices/projectsSlice';
import ProjectListItem from '../ProjectListItem/ProjectListItem';
import StyledEditBoard from '../../EditBoard/EditBoard.styled';

const ProjectList = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.items) || []; // Adăugat fallback
  const isLoading = useSelector(state => state.projects.isLoading);
  const error = useSelector(state => state.projects.error);

  const [isEditBoardOpen, setIsEditBoardOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    console.log("Fetching user projects...");
    dispatch(fetchUserProjects()).then(response => {
      console.log("Fetched projects:", response.payload);
    }).catch(error => {
      console.error("Error fetching projects:", error);
    });
  }, [dispatch]);

  const handleEdit = (project) => {
    console.log('Project to edit:', project);
    setCurrentProject(project);
    setIsEditBoardOpen(true);
  };

  const handleCloseEditBoard = () => {
    setIsEditBoardOpen(false);
    setCurrentProject(null);
  };

  const handleEditBoard = (boardData) => {
    console.log('Board edited:', boardData);
    handleCloseEditBoard();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <ul>
          {projects.map(project => (
            <ProjectListItem
              key={project._id}
              project={project}
              onEdit={handleEdit}
              onDelete={id => dispatch(deleteProject(id))}
            />
          ))}
        </ul>
      )}
      {isEditBoardOpen && (
        <StyledEditBoard
          isOpen={isEditBoardOpen}
          onClose={handleCloseEditBoard}
          onCreate={handleEditBoard}
          project={currentProject}
        />
      )}
    </div>
  );
};

export default ProjectList;
