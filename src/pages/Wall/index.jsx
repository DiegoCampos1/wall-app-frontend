import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TheWallContext from '../../context/TheWallContext';

import {
  PostsContainer,
  Input,
  Button,
  WallContainer,
  PostContainer,
  InputSendContainer,
  Paragraph } from './styledComponents';

function Wall() {
  const [postText, setPostText] = useState('');
  const { posts, user, createPost } = useContext(TheWallContext);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [posts]);

  const renderInputAndButtonPost = () => (
    <InputSendContainer>
      <Input
        type="text"
        placeholder="Text:"
        value={ postText }
        onChange={ (e) => setPostText(e.target.value) }
      />
      <Button
        type="button"
        width="7rem"
        marginTop="0"
        onClick={ () => {
          if (postText) createPost(postText, user.name, user.id);
          setPostText('');
        } }
      >
        Send
      </Button>
    </InputSendContainer>
  );

  const renderLinkToRedirectToLogin = () => (
    <Link to="/create-login">
      <Button type="button" marginLeft="35%">Create Login</Button>
    </Link>
  );

  return (
    <WallContainer>
      <h2>{`Hello, ${user ? user.name : 'Visitor'} !`}</h2>
      <PostsContainer>
        {posts && posts.map((post) => (
          <PostContainer
            author={ user?.id === post.authorId ? 'owner' : 'otherUser' }
            // eslint-disable-next-line no-underscore-dangle
            key={ post._id }
          >
            <Paragraph><strong>{`${post.author}:`}</strong></Paragraph>
            <Paragraph padding="0.6em">{post.text}</Paragraph>
          </PostContainer>
        ))}
        <div ref={ messagesEndRef } />
      </PostsContainer>
      {user ? renderInputAndButtonPost() : renderLinkToRedirectToLogin()}
    </WallContainer>
  );
}

export default Wall;
