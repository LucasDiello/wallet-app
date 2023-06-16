import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './renderWith';
import Wallet from '../../pages/Wallet';

const initialState = {
  user: {
    email: 'lucasdielloviski@hotmail.com',
  },
};

describe('<Wallet />', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<Wallet />, { initialState });
  });

  it('Verifica se o valor do email renderiza corretamente', () => {
    expect(screen.getByTestId('email-field')).toHaveTextContent('lucasdielloviski@hotmail.com');
  });

  it('Verifica o vallor total inicial', () => {
    expect(screen.getByTestId('total-field')).toHaveTextContent('0.00');
  });

  it('Verifica a moeda', () => {
    expect(screen.getByTestId('header-currency-field')).toHaveTextContent('BRL');
  });

  it('Verifica titulo da página', () => {
    expect(screen.getByText('TrybeWallet')).toBeInTheDocument();
  });
});
