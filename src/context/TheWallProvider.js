import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TheWallContext from './TheWallContext';
import { getAllPosts, getUserToken } from '../service/api';

const userMock = {
  id: '616f368a02799dd0c95b6900',
  name: 'Coragem the Cat 3',
  email: 'teste3@test.com',
};

function TheWallProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const [logginError, setLogginError] = useState(false);

  const fetchPosts = async () => {
    const allPosts = await getAllPosts();
    console.log(allPosts);
    setPosts(allPosts.data);
  };

  const userLogin = async (email, password) => {
    const userLogged = await getUserToken(email, password);
    console.log(userLogged);
    if (userLogged && userLogged.data.access_token) {
      const userToken = userLogged.data.access_token;
      const userData = userLogged.data.user;
      localStorage.setItem('token', userToken);
      setToken(userToken);
      setUser(userData);
    } else {
      setLogginError(true);
    }
  };

  useEffect(() => {
    fetchPosts();
    setUser(userMock);
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
