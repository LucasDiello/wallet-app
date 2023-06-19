import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  REQUEST,
  REQUESTFULL,
  SAVE_EDIT } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST: {
    return { ...state,
      currencies: action.payload,
    }; }
  case ADD_EXPENSE: {
    const newExpense = {
      ...action.payload,
      exchangeRates: {},
    };

    return {
      ...state,
      expenses: [...state.expenses, newExpense],
    };
  }
  case REQUESTFULL: {
    const { expenses } = state;
    const allExpense = expenses.map((expense) => ({
      ...expense,
      exchangeRates: action.payload,
    }));

    return {
      ...state, expenses: allExpense };
  }
  case DELETE_EXPENSE: {
    const { expenses } = state;
    const newExpenses = expenses.filter((expense) => expense.id !== action.payload);
    return { ...state, expenses: newExpenses };
  }
  case EDIT_EXPENSE: {
    return { ...state, editor: true, idToEdit: action.payload };
  }
  case SAVE_EDIT: {
    return { ...state, editor: false, expenses: action.payload };
  }
  default:
    return state;
  }
};

export default wallet;
