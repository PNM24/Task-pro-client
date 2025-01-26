import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
  selectTheme,
} from '../redux/auth/selectors';
import { updateUserProfile } from '../redux/auth/operations';

const useAuth = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const updateUser = (updatedFields) => {
    return dispatch(updateUserProfile(updatedFields));
  };

  return {
    isLoading,
    isLoggedIn,
    user,
    theme,
    updateUser,
  };
};

export default useAuth;
