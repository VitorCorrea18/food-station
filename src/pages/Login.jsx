import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { PASSWORD_LENGTH, emailRegex } from '../helpers/constants';
import appLogo from '../images/food-station-logo-final.png';
import '../styles/login.css';

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
    <div className="mainLogin">
      <div className="main-image-content">
        <h1 className="name-title">FoodStation</h1>
        <Image
          fluid
          src={ appLogo }
          alt="Food Station Logo"
          className="main-image"
        />
      </div>
      <Form
        onSubmit={ handleSubmit }
        className="d-grid gap-2 col-10 mx-auto formControl"
      >
        <h1 id="loginTitle">Login</h1>
        <FormControl
          type="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
          className="mb-4"
        />
        <FormControl
          type="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ (e) => setPassword(e.target.value) }
          value={ password }
          className="mb-4"
        />
        <button
          data-testid="login-submit-btn"
          type="submit"
          disabled={ disabled }
          className="loginButton"
        >
          Enter
        </button>
      </Form>
    </div>
  );
}
