import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';

class Table extends Component {
  render() {
    const { expenses } = this.props;

    return (
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
          {expenses.map((item, index) => {
            const { description, tag, method, value, currency, exchangeRates } = item;
            const { ask } = exchangeRates[currency];
            const convertedValue = (value * ask).toFixed(2);
            const result = Number(value).toFixed(2);
            const { name } = exchangeRates[currency];

            return (
              <tr key={ index }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{result}</td>
                <td>{name}</td>
                <td>{ask}</td>
                <td>{convertedValue}</td>
                <td>Real</td>
                <td>
                  <Button
                    label="Editar"
                    moreClasses="btn-wallet"
                  />
                  <Button
                    label="Excluir"
                    moreClasses="btn-wallet"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
