import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <header>
          <p data-testid="email-field">Email: </p>
          <p data-testid="total-field">Despesa Total: R$ </p>
          <p data-testid="header-currency-field"> Moeda: </p>
        </header>
      </main>
    );
  }
}

export default Wallet;
