import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import TheWallContext from '../../context/TheWallContext';
import { Button, Input } from '../Login/styledComponents';
import { PostsContainer, WallContainer, PostContainer } from './styledComponents';

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
        onClick={ () => { createPost(postText, user.name, user.id); setPostText(''); } }
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
    <WallContainer>
      <h4>
        Hello,
        {' '}
        {user ? user.name : 'Visitor'}
      </h4>
      <PostsContainer>
        {posts && posts.map((post) => (
          <PostContainer
            author={ user.id === post.authorId ? 'owner' : 'otherUser' }
            // eslint-disable-next-line no-underscore-dangle
            key={ post._id }
          >
            <p>
              {`${post.author}: `}
              <em>
                {post.text}
              </em>
            </p>
          </PostContainer>
        ))}
      </PostsContainer>
      {user ? renderInputAndButtonPost() : renderLinkToRedirectToLogin()}
    </WallContainer>
  );
}

export default Wall;
