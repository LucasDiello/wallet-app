// Coloque aqui suas actions
export const VALID_EMAIL = 'LOGIN';
export const REQUEST = 'REQUEST';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUESTFULL = 'REQUESTFULL';

const login = (email) => ({
  type: VALID_EMAIL,
  payload: email,
});

const request = (moeda) => ({
  type: REQUEST,
  payload: Object.keys(moeda),
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const requestFullObject = (moeda) => ({
  type: REQUESTFULL,
  payload: moeda,
});

export const fetchMoeda = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      dispatch(requestFullObject(data));
      delete data.USDT;
      dispatch(request(data));
    });
};

export default login;
