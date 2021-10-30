import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TheWallContext from './TheWallContext';
import { getAllPosts } from '../service/api';

const userMock = {
  id: '616f368a02799dd0c95b6900',
  name: 'Coragem the Cat 3',
  email: 'teste3@test.com',
};

function TheWallProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  const fetchPosts = async () => {
    const allPosts = await getAllPosts();
    console.log(allPosts);
    setPosts(allPosts.data);
  };

  useEffect(() => {
    fetchPosts();
    setUser(userMock);
  }, []);

  const theWallContextValues = {
    posts,
    user,
  };

  return (
    <TheWallContext.Provider value={ theWallContextValues }>
      {children}
    </TheWallContext.Provider>
  );
}

TheWallProvider.propTypes = { children: PropTypes.node.isRequired };

export default TheWallProvider;
