import React, { useContext, useState } from 'react';
import TheWallContext from '../../context/TheWallContext';
import { Button, Input } from '../Login/styledComponents';

function Wall() {
  const [postText, setPostText] = useState('');
  const { posts, user, createPost } = useContext(TheWallContext);
  return (
    <div>
      <h4>
        Hello,
        {' '}
        {user && user.name}
      </h4>
      {posts && posts.map((post) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={ post._id }>
          <p>{`${post.author}:`}</p>
          <p>{`${post.text}`}</p>
        </div>
      ))}
      <Input
        type="text"
        placeholder="Text:"
        value={ postText }
        onChange={ (e) => setPostText(e.target.value) }
      />
      <Button
        type="button"
        onClick={ () => createPost(postText, user.name, user.id) }
      >
        Send
      </Button>
    </div>
  );
}

export default Wall;
