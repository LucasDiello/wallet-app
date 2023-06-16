import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../pages/Login';
import { renderWithRouterAndRedux } from './renderWith';

const login = () => screen.getByText(/Login/i);
const password = () => screen.getByTestId('password-input');
const button = () => screen.getByRole('button', { name: 'Entrar' });
const emailInput = () => screen.getByTestId('email-input');

describe('<Login />', () => {
  it('Verifica se o componente Login é renderizado', () => {
    renderWithRouterAndRedux(<Login />);
    expect(login()).toBeInTheDocument();
  });
  it('Verifica se o componente Loginpossui um input de email', () => {
    renderWithRouterAndRedux(<Login />);
    expect(emailInput()).toBeInTheDocument();
  });
  it('Verifica se o componente Login possui um input de senha', () => {
    renderWithRouterAndRedux(<Login />);
    expect(password).toBeInTheDocument();
  });

  it('Verifica se o botão está desativado caso email esteja inválido', () => {
    renderWithRouterAndRedux(<Login />);
    userEvent.type(emailInput(), 'invalid_mail');
    userEvent.type(password(), '12345');

    expect(button()).toBeDisabled();
  });

  it('Verifica rota ao clicar no botão', () => {
    const { history } = renderWithRouterAndRedux(<Login />);
    userEvent.type(emailInput(), 'test@mail.com');
    userEvent.type(password(), '123456');
    userEvent.click(button());

    expect(history.location.pathname).toBe('/');
  });
});
