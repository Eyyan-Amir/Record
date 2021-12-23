import React, { Component } from "react";
import "../App.css";

export default class Login extends Component {
	render() {
		const { form, handleChange, handleSubmit, handleLogin } = this.props;
		// console.log(form);

		return (
			<div className='wrapper'>
				<div className='box'>
					<h1>Login Form</h1>
					<form onSubmit={handleSubmit}>
						<div className='labelControl'>
							<input
								type='text'
								autoComplete='off'
								id='username'
								value={form.username}
								onChange={(event) => handleChange("username", event.target.value)}
							/>
							<label htmlFor='username'>Username</label>
						</div>
						<div className='labelControl'>
							<input
								type='password'
								id='password'
								value={form.password}
								onChange={(event) => handleChange("password", event.target.value)}
							/>
							<label htmlFor='password'>Password</label>
						</div>
						<button type='submit' className='loginBtn'>
							Login
						</button>
					</form>
				</div>
			</div>
		);
	}
}
