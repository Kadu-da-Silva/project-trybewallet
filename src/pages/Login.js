import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/Login.css';
import Button from '../components/Button';
import { submitPersonalInfo } from '../redux/actions';

const MIN_LENGTH_PASSWORD = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { onSubmit, history } = this.props;
    const personalData = { email };
    onSubmit(personalData);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const isEmailInvalid = email === '' || !/^\S+@\S+\.\S+$/.test(email);
    const isPasswordInvalid = password.length < MIN_LENGTH_PASSWORD;

    const isSubmitDisabled = isEmailInvalid || isPasswordInvalid;

    return (
      <form onSubmit={ this.handleSubmit }>
        <h2>Login</h2>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <Button
          type="submit"
          label="Entrar"
          moreClasses="login"
          disabled={ isSubmitDisabled }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.personalData.email,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(submitPersonalInfo(data)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
