import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  Img,
  Form,
  UsernameField,
  PasswordField,
  Label,
  Input,
  ShowPasswordField,
  CheckBoxInput,
  ShowPasswordLabel,
  Button,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <Label htmlFor="username">USERNAME</Label>
        <Input
          id="username"
          type="text"
          value={username}
          placeholder="username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <>
        <Label htmlFor="password">PASSWORD</Label>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          placeholder="password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderCheckedPasswordField = () => (
    <>
      <CheckBoxInput
        type="checkbox"
        id="show-password"
        onChange={this.togglePasswordVisibility}
      />
      <ShowPasswordLabel htmlFor="show-password">
        Show Password
      </ShowPasswordLabel>
    </>
  )

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMessage: errorMsg,
    })
  }

  submitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response, 'rrrr')
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <LoginContainer>
          <Form onSubmit={this.submitLoginForm}>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website login"
            />
            <UsernameField>{this.renderUsernameField()}</UsernameField>
            <PasswordField>{this.renderPasswordField()}</PasswordField>
            <ShowPasswordField>
              {this.renderCheckedPasswordField()}
            </ShowPasswordField>
            <Button type="submit">Login</Button>
            {showSubmitError && (
              <ErrorMessage className="error-message">
                *{errorMessage}
              </ErrorMessage>
            )}
          </Form>
        </LoginContainer>
      </>
    )
  }
}

export default Login
