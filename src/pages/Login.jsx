import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PASSWORD_LENGTH, emailRegex } from '../helpers/constants';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (emailRegex.test(email) && password.length > PASSWORD_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inProgress = localStorage.getItem('inProgressRecipes');
    if (!inProgress) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: {}, meals: {} }));
    }
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  return (
    <Form onSubmit={ handleSubmit }>
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
        disabled={ disabled }
      >
        Enter
      </Button>
    </Form>
  );
}
