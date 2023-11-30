import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../login.css';
import { passwords, login } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleclick = () => {
    const { email, password } = this.state;
    const { dispatch, history } = this.props;
    dispatch(login(email));
    dispatch(passwords(password));
    history.push('/carteira');
  };

  handledisabled = () => {
    const { email, password } = this.state;
    const minPassword = 5;
    return !(this.validateEmail(email) && password.length > minPassword);
  };

  render() {
    return (

      <main id="main-login">
        <div>
          <p>Login</p>
          <form id="form-login">
            <label>
              Email
              <input
                onChange={ this.handleChange }
                data-testid="email-input"
                name="email"
                type="email"
              />

            </label>
            <label>
              Senha
              <input
                data-testid="password-input"
                name="password"
                type="password"
                onChange={ this.handleChange }
              />

            </label>
            <button
              disabled={ this.handledisabled() }
              onClick={ this.handleclick }
              type="button"
            >
              Entrar

            </button>
          </form>
        </div>
      </main>

    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
