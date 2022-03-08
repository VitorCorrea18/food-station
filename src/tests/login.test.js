import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('2 - Crie todos para a tela de login', () => {
  it('O input de email deve possuir o atributo data-testid="email-input"', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  });
  it('O input de senha deve possuir o atributo data-testid="password-input"', () => {
    renderWithRouter(<App />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });
  it('O botão "Enter" deve possuir o atributo data-testid="login-submit-btn"', () => {
    renderWithRouter(<App />);
    const btnSubmit = screen.getByTestId('login-submit-btn');
    expect(btnSubmit).toBeInTheDocument();
  });
});

describe('3 - A pessoa deve conseguir escrever seu email no input de email', () => {
  it('É possível escrever o email', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId('email-input');
    userEvent.type(emailInput, 'teste@teste.com');
    expect(emailInput).toHaveValue('teste@teste.com');
  });
});
