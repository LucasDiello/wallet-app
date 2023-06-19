// Coloque aqui suas actions
export const VALID_EMAIL = 'LOGIN';
export const REQUEST = 'REQUEST';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUESTFULL = 'REQUESTFULL';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EDIT = 'SAVE_EDIT';

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

export const deleteExpense = (expense) => ({
  type: DELETE_EXPENSE,
  payload: expense,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  payload: expense,
});

export const saveEdit = (expense) => ({
  type: SAVE_EDIT,
  payload: expense,
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
