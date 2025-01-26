import icons from '../../assets/icons/icons.svg';

const UserInfo = ({ className: styles, user, openModal }) => {
  return (
    <div className={styles}>
      <span className="userName">{user.name}</span>
      <button onClick={openModal} className="avatarButton">
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.name} className="userAvatar" />
        ) : (
          <svg className="defaultAvatar">
            <use href={`${icons}#icon-userBlue`} />
          </svg>
        )}
      </button>
    </div>
  );
};

export default UserInfo;
