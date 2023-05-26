import React from 'react';
import { useDispatch } from 'react-redux';
import userLocalStorage from './userLocalStorage';
import { setUser } from '../redux/auth/authSlice';

const useLoadUserFromStorage = () => {
  const dispatch = useDispatch();
  const user = userLocalStorage.getUser();

  React.useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch, user]);
};

export default useLoadUserFromStorage;
