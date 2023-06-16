import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './renderWith';
import Table from '../../components/Table';

describe('Teste o componente Table', () => {
  it('Verifica se o componente Table é renderizado', () => {
    renderWithRouterAndRedux(<Table />);
    const table = screen.getByText(/Table/i);
    expect(table).toBeInTheDocument();
  });
});
