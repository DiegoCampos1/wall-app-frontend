import React, { useContext, useState } from 'react';
import { history as historyPropTypes } from 'history-prop-types';

import PropTypes from 'prop-types';
import TheWallContext from '../../context/TheWallContext';
import {
  Button,
  Input,
  LoginContainer,
  ButtonContainer } from '../Login/styledComponents';

const TWO_SECOND = 4000;

function CreateLogin({ history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createMessage, setCreateMessage] = useState(false);

  const { createUser, createdUser } = useContext(TheWallContext);

  const redirectToLoginPage = () => history.push('/');

  if (createdUser && !createMessage) {
    setCreateMessage(true);
    setTimeout(() => redirectToLoginPage(), TWO_SECOND);
  }

  const messageCreateUserInfo = () => <div>Create user, you will redirect</div>;

  return (
    <LoginContainer>
      <h3>Please insert yours information:</h3>
      {createMessage && messageCreateUserInfo()}
      <Input
        type="text"
        placeholder="Name"
        data-testid="input-name"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
      <Input
        type="email"
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
      <ButtonContainer>
        <Button
          type="button"
          onClick={ () => createUser(name, email, password) }
          data-testid="create-login"
        >
          Create Login
        </Button>
      </ButtonContainer>
    </LoginContainer>
  );
}

CreateLogin.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
};

export default CreateLogin;
