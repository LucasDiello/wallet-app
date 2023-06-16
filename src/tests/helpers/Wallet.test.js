import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './renderWith';
import Wallet from '../../pages/Wallet';
import App from '../../App';

const initialState = {
  user: {
    email: 'lucasdielloviski@hotmail.com',
  },
};

describe('<Wallet />', () => {
  it('Verifica se o componente Wallet é renderizado', () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialState });
    const wallet = screen.getByText(/TrybeWallet/i);
    expect(wallet).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });

  it('Verifica se o valor do email renderiza corretamente', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });
    expect(screen.getByTestId('email-field')).toHaveTextContent('lucasdielloviski@hotmail.com');
  });

  it('Verifica o valor total inicial', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });
    expect(screen.getByTestId('total-field')).toHaveTextContent('0.00');
  });

  it('Verifica a moeda', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });
    expect(screen.getByTestId('header-currency-field')).toHaveTextContent('BRL');
  });

  it('Verifica o título da página', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });
    expect(screen.getByText('TrybeWallet')).toBeInTheDocument();
  });
});
