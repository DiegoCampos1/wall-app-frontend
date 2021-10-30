import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TheWallContext from './TheWallContext';
import { getAllPosts, getUserToken } from '../service/api';

function TheWallProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const [logginError, setLogginError] = useState(false);

  const fetchPosts = async () => {
    const allPosts = await getAllPosts();
    setPosts(allPosts.data);
  };

  const userLogin = async (email, password) => {
    try {
      const userLogged = await getUserToken(email, password);
      if (userLogged && userLogged.data.access_token) {
        const userToken = userLogged.data.access_token;
        const userData = userLogged.data.user;
        localStorage.setItem('token', userToken);
        localStorage.setItem('user', JSON.stringify(userData));
        setLogginError(false);
        setToken(userToken);
        setUser(userData);
      }
    } catch (error) {
      setLogginError(true);
      setUser(null);
    }
  };

  const recoveryUserAndTokeFromLocalStorage = () => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromLocalStorage) setUser(userFromLocalStorage);
    const tokenFromLocalStorage = localStorage.getItem('token');
    if (tokenFromLocalStorage) setToken(tokenFromLocalStorage);
  };

  useEffect(() => {
    fetchPosts();
    recoveryUserAndTokeFromLocalStorage();
  }, []);

  const theWallContextValues = {
    posts,
    user,
    userLogin,
    token,
    logginError,
  };

  return (
    <TheWallContext.Provider value={ theWallContextValues }>
      {children}
    </TheWallContext.Provider>
  );
}

TheWallProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TheWallProvider;
