import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar,Typography,Button,IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './Navigation.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display:'flex',
    justifyContent:'flex-start',
    cursor:'pointer',
  },
}));

const Navigation = ({ isSignedIn, onRouteChange, name }) => {
	//style class
	const classes = useStyles();
	return(
		<div className={classes.root}>
	      <AppBar position="static">
	        <Toolbar>
		          <IconButton 
		          	edge="start" 
		          	className={classes.menuButton} 
		          	style={{opacity:`${(isSignedIn)?1:0}`,cursor:`${(isSignedIn)?'pointer':'default'}`}}
		          	color="inherit" aria-label="menu"
		          >
		            <MenuIcon />
		          </IconButton>
	          <Typography 
	          	onClick={ () => {onRouteChange('landing')} } 
	          	variant="h5" 
	          	className={classes.title}
	          	color="secondary"
	          >
	            WorkSpace
	          </Typography>
	          <Button onClick={ () => {onRouteChange('register')} } color="secondary">Register</Button>
	          <Button onClick={ () => {onRouteChange('signin')} } color="secondary">Sign In</Button>
	        </Toolbar>
	      </AppBar>
	    </div>
	);
	
	// if(isSignedIn)
	// {
	// 	return (
	// 		<nav>
	// 			<div className='logo'>
	// 				<img src={ require('./clock-icon.ico') } className='logo-image' />
	// 				<p onClick={ () => {onRouteChange('landing')} } className='f2 grow black pointer logo'>Schedule</p>
	// 			</div>
	// 			<div className='profile_button' onClick={ () => {onRouteChange('profile')}}>
	// 				<img className='profile_button_img' src={`https://robohash.org/${name}?20x20`} alt="Profile"/>
	// 			</div>
	// 			<div className='options'>
	// 				<p onClick={ () => {onRouteChange('landing')} } className='f3 link dim black underline pa3 pointer'>Sign Out</p>
	// 			</div>
	// 		</nav>
	// 	);
	// }
	// else
	// {
	// 	return (
	// 		<nav>
	// 			<div className='logo'>
	// 				<img src={ require('./clock-icon.ico') } className='logo-image' />
	// 				<p onClick={ () => {onRouteChange('landing')} } className='f2 grow black pointer logo'>Schedule</p>
	// 			</div>
	// 			<div className='options'>
	// 				<p onClick={ () => {onRouteChange('signin')} } className='f3 link dim black underline pa3 pointer l1'>Sign In</p>
	// 				<p onClick={ () => {onRouteChange('register')} } className='f3 link dim black underline pa3 pointer l2'>Register</p>
	// 			</div>
	// 		</nav>
	// 	);
	// }
}

export default Navigation;