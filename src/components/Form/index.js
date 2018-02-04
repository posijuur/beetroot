import React from "react";
import SuccessForm from '../SuccessForm';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { setValueUser, displayForm } from "../../AC/";
import { connect } from 'react-redux';

class Form extends React.Component {
  state = {
	username: "",
	usernameError: "",
	email: "",
	emailError: ""
  };

  componentWillMount() {
	const { user, email } = this.props.formReg;

	this.setState({
	  username: user,
	  usernameError: "",
	  email: email,
	  emailError: "",
	  successForm: ""
	});
  }

  change = e => {
	this.setState({
	  [e.target.name]: e.target.value
	});
  };

  validate = () => {
	let isError = false;
	const errors = {
	  usernameError: "",
	  emailError: ""
	};

	if (this.state.username.length < 5) {
	  isError = true;
	  errors.usernameError = "Username needs to be atleast 5 characters long";
	}

	if (this.state.email.indexOf("@") === -1) {
	  isError = true;
	  errors.emailError = "Requires valid email";
	}

	this.setState({
	  ...this.state,
	  ...errors
	});

	return isError;
  };

  onSubmit = e => {
	e.preventDefault();
	const err = this.validate();

	if (!err) {
	  this.props.setValueUser(this.state);
	  this.props.displayForm({ stateForm: true });
	  // clear form
	  this.setState({
		username: "",
		usernameError: "",
		email: "",
		emailError: "",
		successForm: true,
	  });
	}
  };

  render() {
	const primaryBtn = <RaisedButton label="Сохранить" onClick={e => this.onSubmit(e)} primary />;
	const disabledBtn = <RaisedButton label="Сохранить" disabled={true}/>;
	const submitBtn = !!this.state.username.length || !!this.state.email.length ? primaryBtn : disabledBtn;
	const successForm = this.state.successForm ? <SuccessForm /> : null;
	
	return (
	  <div>
		{successForm}

		<form style={{paddingTop: '25px'}}>
		  <TextField
			name="username"
			hintText="Username"
			floatingLabelText="Username"
			value={this.state.username}
			onChange={e => this.change(e)}
			errorText={this.state.usernameError}
		  />
		  <br />
		  <TextField
			name="email"
			hintText="Email"
			floatingLabelText="Email"
			value={this.state.email}
			onChange={e => this.change(e)}
			errorText={this.state.emailError}
			style={{marginBottom: '25px'}}
		  />
		  <br />
		  {submitBtn}
		</form>
	  </div>
	);
  }
}

export default connect(({ formReg }) => {
  return {
	formReg
  }
}, {
  setValueUser, displayForm
})(Form)