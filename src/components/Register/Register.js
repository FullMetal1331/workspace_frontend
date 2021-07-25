import React from 'react';
import './Register.css'

class Register extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			newName:'',
			newEmail:'',
			newPassword:''
		}
	}
	
	onNameChange = (event) => {
		this.setState({newName: event.target.value});
	}
	
	onEmailChange = (event) => {
		this.setState({newEmail: event.target.value});
	}
	
	onPasswordChange = (event) => {
		this.setState({newPassword: event.target.value});
	}
	
	routeChange = (event) => {
		fetch('https://nameless-sands-09614.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.newName,
				email: this.state.newEmail,
				password: this.state.newPassword
			})
		})
		.then(res => res.json())
		.then(user => {
			console.log(user);
			if(user!=='Invalid Form Details')
			{
				this.props.loadUser(user);
				this.props.onRouteChange('timeTable');
			}
		})
		.catch((err) => {console.log(err)})
		
		event.preventDefault();
	}
	
	render() {
		return (
			<div>
				<div className="login-page">
					<div className="form">
					  	<p className='tc f2'>Register</p>
					    <form className="login-form">
						    <input onChange={this.onNameChange} type="text" placeholder="name"/>
						    <input onChange={this.onEmailChange} type="email" placeholder="email"/>
						    <input onChange={this.onPasswordChange} type="password" placeholder="password"/>
						    <button onClick={this.routeChange}>Register</button>
					    </form>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;