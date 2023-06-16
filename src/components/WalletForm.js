import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchMoeda } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: '',
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

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;

    return (
      <div>
        WalletForm
        <form>
          <label>
            Valor
            <input
              onChange={ this.handleChange }
              value={ value }
              name="value"
              data-testid="value-input"
              type="text"
            />
          </label>
          <label>
            Descrição
            <input
              onChange={ this.handleChange }
              value={ description }
              name="description"
              data-testid="description-input"
              type="text"
            />
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
            Tag
            <select onChange={ this.handleChange } name="tag" data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <button onClick={ this.handleClick }>Adicionar despesas</button>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
