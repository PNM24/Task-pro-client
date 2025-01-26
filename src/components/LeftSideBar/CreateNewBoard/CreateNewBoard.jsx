import { useState } from 'react';
import { useDispatch } from 'react-redux';
import NewBoard from '../../NewBoard/NewBoard.styled';
import { createProject } from '../../../redux/slices/projectsSlice';

const CreateNewBoard = ({ className: styles }) => {
  const [isNewBoardOpen, setIsNewBoardOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenNewBoard = () => setIsNewBoardOpen(true);
  const handleCloseNewBoard = () => setIsNewBoardOpen(false);
  const handleCreateBoard = (boardData) => {
    dispatch(createProject(boardData))
      .unwrap()
      .then(() => {
        console.log('New board created:', boardData);
        handleCloseNewBoard();
      })
      .catch(error => {
        console.error('Failed to create new board:', error);
      });
  };

  return (
    <div className={styles}>
      <h4>My Boards</h4>
      <section>
        <span>
          Create a <br />
          new board
        </span>
        <button onClick={handleOpenNewBoard}>+</button>
      </section>
      {isNewBoardOpen && (
        <NewBoard
          isOpen={isNewBoardOpen}
          onClose={handleCloseNewBoard}
          onCreate={handleCreateBoard}
        />
      )}
    </div>
  );
};

export default CreateNewBoard;
