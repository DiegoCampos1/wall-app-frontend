import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import TheWallContext from '../../context/TheWallContext';
import { Button, Input, LoginContainer, ButtonContainer } from './styledComponents';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userLogin } = useContext(TheWallContext);

  return (
    <>
      <h1>Welcome to THE WALL app!</h1>
      <LoginContainer>
        <Input
          type="text"
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
          <Button
            type="button"
            onClick={ () => userLogin(email, password) }
          >
            Login
          </Button>
          <Link to="create-login"><Button type="button">Create Login</Button></Link>
        </ButtonContainer>
      </LoginContainer>
    </>
  );
}

export default Login;
