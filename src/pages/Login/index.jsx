import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TheWallContext from '../../context/TheWallContext';
import { Button,
  Input,
  LoginContainer,
  ButtonContainer,
  SecondButton } from './styledComponents';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userLogin,
    user,
    logginError,
    createdUser,
    setCreatedUser } = useContext(TheWallContext);

  useEffect(() => {
    setCreatedUser(false);
  }, [setCreatedUser]);

  const messageError = () => {
    (
      <div>
        this user dont exist please check your email and password, or create a user
      </div>
    );
  };

  const createdUserMessage = () => {
    (
      <div>
        User create with success, please login.
      </div>
    );
  };

  if (user) return <Redirect to="/wall" />;
  return (
    <LoginContainer>
      <h1>Welcome to THE WALL app!</h1>
      { createdUser === 'success' && createdUserMessage()}
      <Input
        type="text"
        placeholder="Email"
        data-testid="input-email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <Input
        type="password"
        placeholder="Password"
        data-testid="input-password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      { logginError && messageError()}
      <ButtonContainer>
        <Button
          type="button"
          onClick={ () => userLogin(email, password) }
          data-testid="button-login"
        >
          Login
        </Button>
        <Link to="create-login">
          <SecondButton
            type="button"
            data-testid="create-login"
          >
            Create Login

          </SecondButton>
        </Link>
        <Link to="wall">
          <SecondButton
            type="button"
            data-testid="visitor-link-wall"
          >
            Visitor

          </SecondButton>
        </Link>
      </ButtonContainer>
    </LoginContainer>
  );
}

export default Login;
