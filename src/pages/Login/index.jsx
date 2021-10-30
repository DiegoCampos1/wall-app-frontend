import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TheWallContext from '../../context/TheWallContext';
import { Button, Input, LoginContainer, ButtonContainer } from './styledComponents';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userLogin, user, logginError } = useContext(TheWallContext);
  console.log('user e logginError', user, logginError);

  if (user) return <Redirect to="/wall" />;
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
          { logginError && <div>this user dont exist please shure your email and password, or create a new user</div>}
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
