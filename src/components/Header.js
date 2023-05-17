import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  calculateTotalExpense() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return acc + value * ask;
    }, 0);
  }

  render() {
    const { email } = this.props;
    const totalExpense = this.calculateTotalExpense();

    return (
      <header>
        <p data-testid="email-field">{`Email: ${email}`}</p>
        <span>Despesa Total: </span>
        <span data-testid="total-field">
          {totalExpense.toFixed(2)}
        </span>
        <p data-testid="header-currency-field">BRL</p>
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
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(Header);
