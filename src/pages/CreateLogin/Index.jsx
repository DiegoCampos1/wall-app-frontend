import React, { useState } from 'react';
import {
  Button,
  Input,
  LoginContainer,
  ButtonContainer } from '../Login/styledComponents';

function CreateLogin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h3>Please insert yours information:</h3>
      <LoginContainer>
        <Input
          type="text"
          placeholder="Name:"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
        <Input
          type="email"
          placeholder="Email:"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <Input
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <ButtonContainer>
          <Button type="button">Create Login</Button>
        </ButtonContainer>
      </LoginContainer>
    </>
  );
}

export default CreateLogin;
