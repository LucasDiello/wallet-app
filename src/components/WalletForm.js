import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    console.log(currencies.splice(1, 1));

    return (
      <div>
        WalletForm
        <form>
          <label>
            Valor
            <input data-testid="value-input" type="text" />
          </label>
          <label>
            Despesa
            <input data-testid="description-input" type="text" />
          </label>
          <label>
            Moeda Registrada
            <select data-testid="currency-input">
              {currencies.map((curr) => (
                <option key={ curr }>{curr}</option>
              ))}
            </select>
          </label>
          <label>
            Metodo de Pagamento
            <select data-testid="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label>
            Tag
            <select data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
