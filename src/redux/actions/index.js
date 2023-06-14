// Coloque aqui suas actions
export const VALID_EMAIL = 'LOGIN';
export const REQUEST = 'REQUEST';

const login = (email) => ({
  type: VALID_EMAIL,
  payload: email,
});

const request = (moeda) => ({
  type: REQUEST,
  payload: Object.keys(moeda),
});

export const fetchMoeda = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(request(data)));
};

export default login;
