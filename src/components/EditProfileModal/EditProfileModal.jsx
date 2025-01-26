import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import icons from '../../assets/icons/icons.svg';

const EditProfileModal = ({ className: styles, closeModal }) => {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const updatedFields = {};
      if (name !== user.name) updatedFields.name = name;
      if (email !== user.email) updatedFields.email = email;
      if (password) updatedFields.password = password;

      console.log('Sending update:', updatedFields); // Pentru debugging

      if (Object.keys(updatedFields).length > 0) {
        const result = await updateUser(updatedFields);
        console.log('Update result:', result); // Pentru debugging
        setSuccessMessage("Profile updated successfully!");
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        setError("Nu s-au făcut modificări.");
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(typeof error === 'string' ? error : 'A apărut o eroare la actualizarea profilului.');
    }
  };

  const handleAvatarClick = () => {
    // Funcționalitatea de încărcare a imaginii va fi implementată aici în viitor
    console.log('Avatar button clicked');
  };

  return (
    <div className={styles}>
      <div className="modal-overlay">
        <div className="modalContent">
          <h2>Edit profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="avatarUpload">
              <button type="button" onClick={handleAvatarClick} className="avatarButton">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.name} className="userAvatar" />
                ) : (
                  <svg className="defaultAvatar">
                    <use href={`${icons}#icon-userBlue`} />
                  </svg>
                )}
              </button>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <div className="error-message">{error}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <button type="submit">Send</button>
          </form>
          <button onClick={closeModal} className="closeButton">×</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
