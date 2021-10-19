import React, { useState } from 'react';
import { Button, Input } from './styledComponents';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Input
        type="text"
        placeholder="Name:"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
      <Input
        type="Password"
        placeholder="Password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <Button type="button">Login</Button>
      <Button type="button">Create Login</Button>
    </div>
  );
}

export default Login;
