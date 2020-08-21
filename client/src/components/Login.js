import React from 'react'
import axios from 'axios'
import { axiosWithAuth } from './utils/axiosWithAuth'

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: '',
		},
	}

	handleChange = (e) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value,
			},
		})
	}

	login = (e) => {
		e.preventDefault()

		axios
			.post('http://localhost:5000/api/login', this.state.credentials)
			.then((res) => {
				console.log(res)
				localStorage.setItem('token', res.data.payload)

				this.props.history.push('/colors')
			})
			.catch((err) => console.log('Error!!!', { err }))
	}

	render() {
		return (
			<div className="formCont">
				<h1> Bubbles! </h1>
				<form onSubmit={this.login}>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={this.state.credentials.username}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>
					<button>Log in</button>
				</form>
			</div>
		)
	}
}

export default Login
