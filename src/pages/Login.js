import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import login from '../redux/actions';

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
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(login(email));
    history.push('/carteira');
  };

  handledisabled = () => {
    const { email, password } = this.state;
    const minPassword = 5;
    return !(this.validateEmail(email) && password.length > minPassword);
  };

  render() {
    return (

      <>
        <div>Login</div>
        <form>
          <label>
            Email:
            <input
              onChange={ this.handleChange }
              data-testid="email-input"
              name="email"
              type="email"
            />

          </label>
          <label>
            Senha:
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

      </>

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
