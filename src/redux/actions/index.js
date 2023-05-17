export const submitPersonalInfo = (data) => ({
  type: 'LOGIN', payload: data,
});

const successApi = (data) => ({
  type: 'SUCCESS', payload: data,
});

const failedApi = (error) => ({
  type: 'FAILED', error,
});

const URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchApi = () => async (dispatch) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const list = Object.keys(data);
    const listCount = list.filter((e) => e !== 'USDT');
    dispatch(successApi(listCount));
  } catch (error) {
    dispatch(failedApi(error));
  }
};

export const saveExpense = (data) => ({
  type: 'SAVE_EXPENSES', payload: data,
});

export const addExpense = (expense) => async (dispatch) => {
  try {
    const response = await fetch(URL);
    const exchangeRates = await response.json();
    const data = { ...expense, exchangeRates };
    dispatch(saveExpense(data));
  } catch (error) {
    dispatch(failedApi(error));
  }
};
