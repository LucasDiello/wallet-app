import { ADD_EXPENSE, REQUEST, REQUESTFULL } from '../actions';

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
      ...state,
      expenses: allExpense,
    };
  }
  default:
    return state;
  }
};

export default wallet;
