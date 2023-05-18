import React, { Component } from 'react';

class Table extends Component {
  render() {
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
        {/* <tbody>
          {dados.map((item, index) => (
            <tr key={ index }>
              <td>{item.descricao}</td>
              <td>{item.tag}</td>
              <td>{item.metodoPagamento}</td>
              <td>{item.valor}</td>
              <td>{item.moeda}</td>
              <td>{item.cambio}</td>
              <td>{item.valorConvertido}</td>
              <td>{item.moedaConversao}</td>
              <td>
                <button onClick={ () => handleEditar(index) }>Editar</button>
                <button onClick={ () => handleExcluir(index) }>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    );
  }
}

export default Table;
