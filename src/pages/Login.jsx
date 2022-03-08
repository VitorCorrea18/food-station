import React, { useState } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form>
      <h1>Login</h1>
      <FormControl
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ (e) => setEmail(e.target.value) }
        value={ email }
      />
      <FormControl
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ (e) => setPassword(e.target.value) }
        value={ password }
      />
      <Button
        data-testid="login-submit-btn"
        type="submit"
      >
        Enter

      </Button>
    </Form>
  );
}
