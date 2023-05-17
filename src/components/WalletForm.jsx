import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, addExpense } from '../redux/actions';
import '../styles/Wallet.css';
import Button from './Button';

class WalletForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);

    const { expenses } = this.props;

    this.state = {
      id: expenses.length,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleAddExpense() {
    const { value, id, currency, method, tag, description } = this.state;
    const { dispatch } = this.props;

    // Objeto de despesa com os valores do estado
    this.setState((prevState) => ({ id: prevState.id + 1 }));
    const expense = {
      id,
      value,
      currency,
      method,
      tag,
      description,
    };

    // Despatch para adicionar a despesa
    dispatch(addExpense(expense));

    // Limpa o estado do formulário
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;

    return (
      <form className="form-despesa">
        <label>
          Valor
          <input
            name="value"
            type="number"
            data-testid="value-input"
            placeholder="Valor da despesa"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Moeda
          <select
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {currencies.map((obj) => (
              <option value={ obj } key={ obj }>{obj}</option>
            ))}
          </select>
        </label>
        <label>
          Método de pagamento:
          <select
            name="method"
            value={ method }
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label>
          Categoria
          <select
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option value="Alimentação" key="Alimentação">Alimentação</option>
            <option value="Lazer" key="Lazer">Lazer</option>
            <option value="Trabalho" key="Trabalho">Trabalho</option>
            <option value="Transporte" key="Transporte">Transporte</option>
            <option value="Saúde" key="Saúde">Saúde</option>
          </select>
        </label>
        <label>
          Descrição
          <input
            name="description"
            type="text"
            data-testid="description-input"
            placeholder="Descrição da despesa"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <Button
          type="button"
          label="Adicionar despesa"
          moreClasses="btn-wallet"
          onClick={ this.handleAddExpense }
        />
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
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.objectOf(PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      ask: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
