import React, {Component} from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    const errors = this.props.errors || {};

    return (
      <form onSubmit={this.onSubmit}>
        <h1>SIGN IN</h1>
        <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Enter username" />
        <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Enter password" />
        <input name="submit" type="submit" value="Login" />
      </form>
    )
  }
}