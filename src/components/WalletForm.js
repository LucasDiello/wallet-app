import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchMoeda, saveEdit } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMoeda());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = async (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { id } = this.state;
    dispatch(fetchMoeda());
    dispatch(addExpense(this.state));
    this.setState({ id: id + 1,
      value: '',
      description: '' });
  };

  handleEdit = (event) => {
    event.preventDefault();
    const { expenses, idToEdit, dispatch } = this.props;
    const { value, description, currency, method, tag } = this.state;

    const editExpense = expenses.map((expense) => {
      if (expense.id === idToEdit) {
        return {
          id: idToEdit,
          value,
          description,
          currency,
          method,
          tag,
          exchangeRates: expense.exchangeRates,
        };
      }
      return expense;
    });

    dispatch(saveEdit(editExpense));
  };

  render() {
    const { currencies, editor } = this.props;
    const { value, description } = this.state;
    return (
      <div id='table-content'>
        <form id='form-table'>
        <label>
            Descrição da despesa
            <input
              onChange={ this.handleChange }
              value={ description }
              name="description"
              data-testid="description-input"
              type="text"
            />
          </label>
          <label>
            Categoria da despesa
            <select onChange={ this.handleChange } name="tag" data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <label>
            Valor
            <input
              onChange={ this.handleChange }
              value={ value }
              name="value"
              data-testid="value-input"
              type="number"
            />
          </label>
          <label>
            Metodo de Pagamento
            <select
              onChange={ this.handleChange }
              name="method"
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label>
            Moeda Registrada
            <select
              onChange={ this.handleChange }
              name="currency"
              data-testid="currency-input"
            >
              {currencies.map((curr) => (
                <option key={ curr }>{curr}</option>
              ))}
            </select>
          </label>
        </form>
        <div>
        { editor ? <button onClick={ this.handleEdit }>Editar despesas</button>
            : <button onClick={ this.handleClick }>Adicionar despesas</button>}
        </div>
      </div>
    );
  }
}
WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  idToEdit: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});
export default connect(mapStateToProps)(WalletForm);
