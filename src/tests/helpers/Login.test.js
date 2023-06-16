import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../pages/Login';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

const login = () => screen.getByText(/Login/i);
const password = () => screen.getByTestId('password-input');
const getLoginButton = () => screen.getByRole('button', { name: 'Entrar' });
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
    expect(password()).toBeInTheDocument();
  });

  it('Verifica se o botão está desativado caso email esteja inválido', () => {
    renderWithRouterAndRedux(<Login />);
    userEvent.type(emailInput(), 'invalid_mail');
    userEvent.type(password(), '12345');

    expect(getLoginButton()).toBeDisabled();
  });

  it('Verifica rota ao clicar em entrar', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const passwordIput = screen.getByTestId('password-input');
    const emailIput = screen.getByTestId('email-input');
    const button = screen.getByRole('button', { name: 'Entrar' });

    userEvent.type(emailIput, 'exemplo@test.com');
    userEvent.type(passwordIput, '1234567');
    expect(button).not.toBeDisabled();
    userEvent.click(button);
    expect(history.location.pathname).toBe('/carteira');
  });
});
