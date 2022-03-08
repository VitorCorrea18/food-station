import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const BTN_SUBMIT = 'login-submit-btn';
const TEST_EMAIL = 'teste@teste.com';
const TEST_PASSWORD = '1234567';

describe('2 - Crie todos para a tela de login', () => {
  it('O input de email deve possuir o atributo data-testid="email-input"', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    expect(emailInput).toBeInTheDocument();
  });
  it('O input de senha deve possuir o atributo data-testid="password-input"', () => {
    renderWithRouter(<App />);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    expect(passwordInput).toBeInTheDocument();
  });
  it('O botão "Enter" deve possuir o atributo data-testid="login-submit-btn"', () => {
    renderWithRouter(<App />);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    expect(btnSubmit).toBeInTheDocument();
  });
});

describe('3 - A pessoa deve conseguir escrever seu email no input de email', () => {
  it('É possível escrever o email', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    userEvent.type(emailInput, TEST_EMAIL);
    expect(emailInput).toHaveValue(TEST_EMAIL);
  });
});

describe('4 - A pessoa deve conseguir escrever seu email no input de email', () => {
  it('É possível escrever a senha', () => {
    renderWithRouter(<App />);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    userEvent.type(passwordInput, TEST_PASSWORD);
    expect(passwordInput).toHaveValue(TEST_PASSWORD);
  });
});

describe('5 - botão só é liberado com e-mail e senha válido', () => {
  it('botão está desabilitado', () => {
    renderWithRouter(<App />);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    expect(btnSubmit).toHaveAttribute('disabled');
  });
  it('botão está desabilitado só com email valido', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    userEvent.type(emailInput, TEST_EMAIL);
    expect(btnSubmit).toHaveAttribute('disabled');
  });
  it('botão está desabilitado só com senha valido', () => {
    renderWithRouter(<App />);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    userEvent.type(passwordInput, TEST_PASSWORD);
    expect(btnSubmit).toHaveAttribute('disabled');
  });
  it('botão está abilitado com e-mail e senha valido', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    userEvent.type(emailInput, TEST_EMAIL);
    userEvent.type(passwordInput, TEST_PASSWORD);
    expect(btnSubmit).not.toHaveAttribute('disabled');
  });
  it('botão está desabilitado com e-mail invalido e senha valida', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    userEvent.type(emailInput, 'textoErrado.com');
    userEvent.type(passwordInput, TEST_PASSWORD);
    expect(btnSubmit).toHaveAttribute('disabled');
  });
  it('botão está desabilitado com e-mail valido e senha invalida', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    userEvent.type(emailInput, TEST_EMAIL);
    userEvent.type(passwordInput, '123456');
    expect(btnSubmit).toHaveAttribute('disabled');
  });
});

describe('6 - Salve no localStorage as chaves mealsToken e cocktailsToken', () => {
  it('as chaves mealsToken e cocktailsToken devem estar salvos em localStorage', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    userEvent.type(emailInput, TEST_EMAIL);
    userEvent.type(passwordInput, TEST_PASSWORD);
    userEvent.click(btnSubmit);
    // fonte: https://github.com/testing-library/react-testing-library/blob/main/README.md
    expect(window.localStorage.getItem('mealsToken')).toEqual('1');
    expect(window.localStorage.getItem('cocktailsToken')).toEqual('1');
  });
});

describe('7 - Salve o e-mail da pessoa usuária no localStorage na chave user', () => {
  it('Após a submissão a chave user deve estar salva em localStorage', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    const userStorage = '{"email":"teste@teste.com"}';
    userEvent.type(emailInput, TEST_EMAIL);
    userEvent.type(passwordInput, TEST_PASSWORD);
    userEvent.click(btnSubmit);
    // fonte: https://github.com/testing-library/react-testing-library/blob/main/README.md
    expect(window.localStorage.getItem('user')).toEqual(userStorage);
  });
});

describe('8 - Redirecione para a tela de receitas após a submissão', () => {
  it('A rota muda para a tela principal de receitas de comidas', () => {
    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const btnSubmit = screen.getByTestId(BTN_SUBMIT);
    userEvent.type(emailInput, TEST_EMAIL);
    userEvent.type(passwordInput, TEST_PASSWORD);
    userEvent.click(btnSubmit);
    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
