import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  calculateExpense = () => {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach((expense) => {
      const { value } = expense;
      const askValue = parseFloat(expense.exchangeRates[expense.currency]?.ask);
      total += askValue * value;
    });

    return total.toFixed(2);
  };

  render() {
    const { email } = this.props;
    const total = this.calculateExpense();
    return (
      <div>
        <h1>Header</h1>

        <div>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{total}</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(Header);
