import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (
    <Form>
      <h1>Login</h1>
      <FormControl type="email" placeholder="Email" data-testid="email-input" />
      <FormControl type="password" placeholder="Password" data-testid="password-input" />
      <Button data-testid="login-submit-btn" type="submit">Enter</Button>
    </Form>
  );
}
