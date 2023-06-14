// Coloque aqui suas actions
export const VALID_EMAIL = 'LOGIN';

const login = (email) => ({
  type: VALID_EMAIL,
  payload: email,
});

export default login;
