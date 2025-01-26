import { NavLink } from 'react-router-dom';

const AuthNavigation = ({ className: styles }) => {
  return (
    <div className={styles}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};

export default AuthNavigation;
