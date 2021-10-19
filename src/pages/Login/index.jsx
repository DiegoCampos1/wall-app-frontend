import React, { useState } from 'react';
import { Button, Input, LoginContainer, ButtonContainer } from './styledComponents';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Welcome to THE WALL app!</h1>
      <LoginContainer>
        <Input
          type="text"
          placeholder="Name:"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
        <Input
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <ButtonContainer>
          <Button type="button">Login</Button>
          <Button type="button">Create Login</Button>
        </ButtonContainer>
      </LoginContainer>
    </>
  );
}

export default Login;
