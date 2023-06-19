import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, editExpense } from '../redux/actions';

class Table extends Component {
  deleteExpense = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteExpense(id));
  };

  editExpense = (id) => {
    const { dispatch } = this.props;
    dispatch(editExpense(id));
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
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>
                    {expense.value}
                    .00
                  </td>
                  <td>{expense.exchangeRates[expense.currency]?.name}</td>
                  <td>{askValue.toFixed(2)}</td>
                  <td>{total }</td>
                  <td>Real</td>
                  <td>
                    <button
                      onClick={ () => this.deleteExpense(expense.id) }
                      data-testid="delete-btn"
                    >
                      Exlcuir
                    </button>
                    <button
                      onClick={ () => this.editExpense(expense.id) }
                      data-testid="edit-btn"
                    >
                      Editar

                    </button>
                  </td>
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
