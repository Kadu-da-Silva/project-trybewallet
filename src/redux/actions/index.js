export const submitPersonalInfo = (personalData) => ({
  type: 'LOGIN',
  payload: personalData,
});

const successApi = (currencies) => ({
  type: 'SUCCESS', payload: currencies,
});

const failedApi = (error) => ({
  type: 'FAILED', error,
});

export function fetchApi() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const list = Object.keys(data);
      const listCount = list.filter((e) => e !== 'USDT');
      dispatch(successApi(listCount));
    } catch (error) {
      dispatch(failedApi(error));
    }
  };
}
