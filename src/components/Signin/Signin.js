import React from 'react';
import './Signin.css';
import PropTypes from 'prop-types';
import { makeStyles,withStyles  } from '@material-ui/core/styles';
import { Button,Paper,TextField,Typography,Slide } from '@material-ui/core';

const styles = theme => ({
  fieldCard: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    padding:'5%',
    height:'60%',
    backgroundColor:'#222831',
    borderRadius:'20px'
  },
  textfield: {
  	minWidth:'300px',
  	backgroundColor:'#fff'
  }
});

class Signin extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
		
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.routeChange = this.routeChange.bind(this);
	}
	
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}
	
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}
	
	routeChange = (event) => {
		
		event.preventDefault();
		
		fetch('https://nameless-sands-09614.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then((user) => {
				if(user!="invalid credentials")
				{
					this.props.loadUser(user);
					this.props.onRouteChange('timeTable');
				}
		})
		.catch((err) => {console.log(err)})
		
			}
	
	render() {
		const { classes } = this.props;
		return (
			<div className="Login-Layout" >
				<Paper elevation={3} className={classes.fieldCard} >
				  	<Typography variant="h4" style={{fontWeight:'600', color:'#eee'}} >Sign In</Typography>
				  	<TextField label="Email" variant="filled" className={classes.textfield} />
				  	<TextField label="Password" variant="filled" className={classes.textfield} />
				  	<Button variant="contained" color="secondary" disableElevation>
						  Disable elevation
						</Button>
				</Paper>
			</div>
		);
	}
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin);