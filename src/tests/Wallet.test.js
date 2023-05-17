import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Wallet page', () => {
  test('renders the Wallet page', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Wallet />);
    const walletPage = getByTestId('wallet-page');
    expect(walletPage).toBeInTheDocument();
  });

  test('fills and submits the expense form', async () => {
    const { getByTestId, getByText } = renderWithRouterAndRedux(<Wallet />);
    const valueInput = getByTestId('value-input');
    const currencyInput = getByTestId('currency-input');
    const methodInput = getByTestId('method-input');
    const tagInput = getByTestId('tag-input');
    const descriptionInput = getByTestId('description-input');
    const addExpenseButton = getByText('Adicionar despesa');

    // Preenche o formulário
    fireEvent.change(valueInput, { target: { value: '100' } });
    fireEvent.change(currencyInput, { target: { value: 'BRL' } });
    fireEvent.change(methodInput, { target: { value: 'Cartão de crédito' } });
    fireEvent.change(tagInput, { target: { value: 'Lazer' } });
    fireEvent.change(descriptionInput, { target: { value: 'Restaurante' } });

    // Verifica se os campos foram preenchidos corretamente
    expect(valueInput.value).toBe('100');
    expect(methodInput.value).toBe('Cartão de crédito');
    expect(tagInput.value).toBe('Lazer');
    expect(descriptionInput.value).toBe('Restaurante');

    // Submete o formulário
    fireEvent.click(addExpenseButton);

    // Aguarda a resposta assíncrona
    await waitFor(() => {
      // Verifica se os campos foram redefinidos após a adição da despesa
      expect(valueInput.value).toBe('');
      expect(currencyInput.value).toBe('USD');
      expect(methodInput.value).toBe('Dinheiro');
      expect(tagInput.value).toBe('Alimentação');
      expect(descriptionInput.value).toBe('');
    });
  });
});
