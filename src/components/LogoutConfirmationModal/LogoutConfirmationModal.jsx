import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/auth/operations';
import { GreenButton } from '../../components/common/FormButton/FormButton.styled';
import { toast } from 'react-toastify';
import 'animate.css';

const LogoutConfirmationModal = ({ className: styles, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleLogout = async () => {
    try {
      toast.info('Logging out...');
      await dispatch(logout()).unwrap();
      toast.success('Logged out successfully!');
      closeModal();
      navigate('/'); // Navighează la pagina principală după logout
    } catch (error) {
      toast.error('Failed to log out!');
      console.error(error);
    }
  };

  return (
    <div
      className={styles}
      onClick={event => event.currentTarget === event.target && closeModal()}
    >
      <div className="modalContent animate__animated animate__zoomIn animate__slow">
        <div>
          <span className="text">Are you sure you want to</span>{' '}
          <span className="logout">Log out?</span>
        </div>
        <div className="buttonWrapper">
          <GreenButton
            type="button"
            text="Yes, please!"
            handlerFunction={handleLogout}
          />
          <GreenButton
            type="button"
            text="Cancel"
            handlerFunction={() => {
              console.log('Cancel button clicked');
              toast.info('Logout cancelled.');
              closeModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmationModal;
