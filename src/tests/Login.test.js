import React from 'react';
import { fireEvent } from '@testing-library/react';
import Login from '../pages/Login';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const TEST_EXAMPLE = 'test-example';

describe('Login component', () => {
  test('renders email input', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    expect(passwordInput).toBeInTheDocument();
  });

  test('updates email value on change', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    fireEvent.change(emailInput, { target: { value: TEST_EXAMPLE } });
    expect(emailInput.value).toBe(TEST_EXAMPLE);
  });

  test('updates password value on change', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });

  // test('submits the form with correct data', () => {
  //   const { getByTestId } = renderWithRouterAndRedux(<Login />);
  //   const emailInput = getByTestId(EMAIL_INPUT);
  //   const passwordInput = getByTestId(PASSWORD_INPUT);
  //   const submitButton = getByTestId('submit-button');

  //   const TEST_EMAIL = 'test@example.com';
  //   const TEST_PASSWORD = 'test123';

  //   const mockDispatch = jest.fn();
  //   store.dispatch = mockDispatch;

  //   fireEvent.change(emailInput, { target: { value: TEST_EMAIL } });
  //   fireEvent.change(passwordInput, { target: { value: TEST_PASSWORD } });
  //   fireEvent.click(submitButton);

  //   expect(mockDispatch).toHaveBeenCalledWith(submitPersonalInfo(TEST_EMAIL));
  // });
});
