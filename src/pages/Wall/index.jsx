import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import TheWallContext from '../../context/TheWallContext';
import { Button, Input } from '../Login/styledComponents';

function Wall() {
  const [postText, setPostText] = useState('');
  const { posts, user, createPost } = useContext(TheWallContext);

  const renderInputAndButtonPost = () => (
    <>
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
    </>
  );

  const renderLinkToRedirectToLogin = () => (
    <Link to="/">To send messages, please do Loggin</Link>
  );

  console.log(user);
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
      {user ? renderInputAndButtonPost() : renderLinkToRedirectToLogin()}
    </div>
  );
}

export default Wall;
