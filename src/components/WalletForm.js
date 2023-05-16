import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../redux/actions';
import '../styles/Wallet.css';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  render() {
    const { currencies } = this.props;
    return (
      <form className="form-despesa">
        <label>
          <input
            type="number"
            data-testid="value-input"
            placeholder="Valor da despesa"
          />
        </label>
        <label>
          <input
            type="text"
            data-testid="description-input"
            placeholder="Descrição da despesa"
          />
        </label>
        <label>
          <select data-testid="currency-input">
            {currencies.map((obj) => (
              <option value="" key={ obj }>{obj}</option>
            ))}
          </select>
        </label>
        <label>
          <select data-testid="method-input">
            <option value="Dinheiro" key="Dinheiro">Dinheiro</option>
            <option value="Crédito" key="Crédito">Cartão de crédito</option>
            <option value="Débito" key="Débito">Cartão de débito</option>
          </select>
        </label>
        <label>
          <select data-testid="tag-input">
            <option value="Alimentação" key="Alimentação">Alimentação</option>
            <option value="Lazer" key="Lazer">Lazer</option>
            <option value="Trabalho" key="Trabalho">Trabalho</option>
            <option value="Transporte" key="Transporte">Transporte</option>
            <option value="Saúde" key="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = {
  currencies: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
