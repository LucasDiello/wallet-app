import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../logo Trybe Wallet.png';
import {AiOutlineUser} from 'react-icons/ai';
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
      <header id="header-items">
        <div id="header-content">
          <h1>WALLET</h1>
          <p data-testid="email-field">{AiOutlineUser()}{email}</p>
          <p data-testid="total-field">
            {' '}
            Total de despesas:
            {' '}
            <span>{total} BRL</span>

          </p>
        </div>
      </header>
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
