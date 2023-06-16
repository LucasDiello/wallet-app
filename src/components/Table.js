import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../redux/actions';

class Table extends Component {
  deleteExpense = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteExpense(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <p>Table</p>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              const { value } = expense;
              const askValue = parseFloat(expense.exchangeRates[expense.currency]?.ask);
              const total = (askValue * value).toFixed(2);

              return (
                <tr key={ expense.id }>
                  <th>{expense.description}</th>
                  <th>{expense.tag}</th>
                  <th>{expense.method}</th>
                  <th>{expense.value}</th>
                  <th>{expense.exchangeRates[expense.currency]?.name}</th>
                  <th>{expense.exchangeRates[expense.currency]?.ask}</th>
                  <th>{total }</th>
                  <th>Real</th>
                  <button
                    onClick={ () => this.deleteExpense(expense.id) }
                  >
                    Editar/Exlcuir
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
