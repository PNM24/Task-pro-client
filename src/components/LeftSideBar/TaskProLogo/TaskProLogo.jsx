import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedProject } from '../../../redux/slices/projectsSlice';
import icons from '../../../assets/icons/icons.svg';

const TaskProLogo = ({ className: styles }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedProject(null)); // Resetăm selectedProject
    navigate('/dashboard');
  };

  return (
    <div className={styles} onClick={handleClick}>
      <svg>
        <use href={`${icons}#icon-logoBlue`}></use>
      </svg>
      <span>Task Pro</span>
    </div>
  );
};

export default TaskProLogo;
