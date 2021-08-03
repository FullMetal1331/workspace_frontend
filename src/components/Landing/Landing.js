import React,{ useState,useEffect,useRef } from 'react';
import './Landing.css';
import { makeStyles } from '@material-ui/core/styles';
import { Fade,Paper,Typography,Zoom } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  paper: {
    width:'40%',
    height:'90%',
    padding:'5%',
    borderRadius:'50px',
  },
  paperType1: {
  	backgroundColor:'#eee',
  	color:'#393E46',
  },
  paperType2: {
  	backgroundColor:'#393E46',
  	color:'#eee',
  },
  centerize:{
  	display:'flex',
    justifyContent:'center',
    alignItems:'center',
	},
	columnCenterize:{
		display:'flex',
  	flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
	},
}));

function Scroller({ className, style, children, trackIds, onScrollToElement }) {
  return (
    <div
      className={className}
      style={style}
      onScroll={(e) => {
        for (let i = 0; i <= trackIds.length - 1; i++) {
          const id = trackIds[i];
          const trackedEl = document.getElementById(id);
          const scrollerEl = e.currentTarget;
          // console.log(id);
          // console.log(scrollerEl.scrollTop,trackedEl);

          if (
            scrollerEl.scrollTop >
            trackedEl.offsetTop + trackedEl.offsetHeight - scrollerEl.offsetHeight
          ) {
            onScrollToElement(trackedEl);
          }
        }
      }}
    >
      {children}
    </div>
  );
}

const Landing = () => {
	//style classes
	const classes = useStyles();
	
	//variables
	const [section2,setSection2] = useState(false);
	const [section3,setSection3] = useState(false);
	
	const landingSec1 = useRef(0);
	
	//functions
	const testing = () => {
		console.log('sdfsdf');
	}
	
	//useEffects
	
	// useEffect(()=>{
	// 	 window.addEventListener('scroll', this.handleScroll);
	// },[])
	
	// useEffect(()=>{
	// 	console.log(section1);
	// },[section1])
	
	return(
		  
		  <Scroller
		    className="Landing-Layout"
		    style={{backgroundColor:'#eee'}}
		    trackIds={["sec2","sec3"]}
		    onScrollToElement={(el) => {
		      if (el.id === "sec2" && !section2) {
		        setSection2(true);
		      }
		      if (el.id === "sec3" && !section3) {
		        setSection3(true);
		      }
		    }}
		  >
			<div className="Landing-section" style={{backgroundColor:'#eee',flexGrow:1}} >
				<Zoom in={true} style={{ transitionDelay:'500ms'}} >
					<Paper elevation={3} className={`${classes.paper} ${classes.paperType2}`} >
						<EventAvailableIcon  style={{width:'100%',height:'100%'}} />
					</Paper>
				</Zoom>
				<hl style={{width:'10px',height:'10px', backgroundColor:'#eee',marginBottom:'30%'}} />
				<Fade in={true} style={{ transitionDelay:'500ms'}} >
					<Paper id="sec1" elevation={0} className={`${classes.paper} ${classes.paperType1} ${classes.centerize}`} >
						<Typography variant="h2" color="primary">About WorkSpace</Typography>
					</Paper>
				</Fade>
			
			</div>
			<div className="Landing-section" style={{backgroundColor:'#393E46',flexGrow:1}} >
				<Fade in={section2} style={{ transitionDelay:'500ms'}} >
					<Paper elevation={0} className={`${classes.paper} ${classes.paperType2} ${classes.centerize}`} >
						<Typography variant="h2" color="secondary">Workspace helps in staying on track</Typography>
					</Paper>
				</Fade>
				<hl id="sec2" style={{width:'10px',height:'10px', backgroundColor:'#393E46',marginBottom:'30%'}} />
				<Zoom in={section2} style={{ transitionDelay:'500ms'}} >
					<Paper elevation={3} className={`${classes.paper} ${classes.paperType1} ${classes.columnCenterize}`} >
							{/*<SettingsIcon className='cog cogUp cogAntiClock' style={{marginRight:'30%',fontSize:'100px'}} />*/}
							<SettingsIcon className='cogClock' style={{marginLeft:'40%',fontSize:'300px'}} />
							<SettingsIcon className='cog cogDown cogAntiClock' style={{marginRight:'30%',fontSize:'200px'}} />
					</Paper>
				</Zoom>
			</div>
			<div className="Landing-section" style={{backgroundColor:'#eee',flexGrow:1}} >
				<Zoom in={section3} style={{ transitionDelay:'500ms'}} >
					<Paper elevation={3} className={`${classes.paper} ${classes.paperType2}`} >
						<NotificationsActiveIcon  style={{width:'100%',height:'100%'}} />
					</Paper>
				</Zoom>
				<hl id="sec3" style={{width:'10px',height:'10px', backgroundColor:'#eee',marginBottom:'30%'}} />
				<Fade in={section3} style={{ transitionDelay:'500ms'}} >
					<Paper elevation={0} className={`${classes.paper} ${classes.paperType1} ${classes.centerize}`} >
						<Typography variant="h2" color="primary">Workspace delivering seemless notification</Typography>
					</Paper>
				</Fade>
			</div>
		</Scroller>
	)
	{/*<div className="Landing-Layout" style={{backgroundColor:'#eee'}} ref={landingSec1} onScroll={testing} >*/}
	// return(
	// 	<div className='cards'>
	// 		<div className='tc dib br3 pa3 ma2 grow card card1 bw2 shadow-5'>
	// 			<img alt="photo" src={ require('./images.png') } className='c1img' />
	// 			<div>
	// 				<h2 className='f2'>About Schedule</h2>
	// 				<p>Schedule is an all in one App to manage your schedule as well as your workload from long-term projects to short-term errands</p>
	// 			</div>
	// 		</div>
	// 		<div className='tc dib br3 pa3 ma2 grow card card2 bw2 shadow-5'>
	// 			<div className='c2imgs'>
	// 				<img alt="photo" src={ require('./cogwheel.png') } className='c2img1 mr5' />
	// 				<img alt="photo" src={ require('./cogwheel.png') } className='c2img2 ml5' />
	// 				<img alt="photo" src={ require('./cogwheel.png') } className='c2img3 mr5' />
	// 			</div>
	// 			<div>
	// 				<h2 className='f2'>How it works</h2>
	// 				<p>Schedule App uses Reactjs to dynamically renders HTML elements all the while updating user data in the relational databases through a back-end server made using Expressjs</p>
	// 			</div>
	// 		</div>
	// 		<div className='tc dib br3 pa3 ma2 grow card card3 bw2 shadow-5'>
	// 			<div className='c3imgs'>
	// 				<div>
	// 					<img alt="photo" src={`https://robohash.org/saksham?100x100`} className='c3img11' style={{width:'100%'}} />
	// 					<img alt="photo" src={`https://robohash.org/utkarsh2?100x100`} className='c3img12' style={{width:'100%'}} />
	// 				</div>
	// 				<div>
	// 					<img alt="photo" src={`https://robohash.org/siddhart?100x100`} className='c3img21' style={{width:'100%'}} />
	// 					<img alt="photo" src={`https://robohash.org/prakarsh?100x100`} className='c3img22' style={{width:'100%'}} />
	// 				</div>
	// 			</div>
	// 			<div>
	// 				<h2 className='f2'>Our Team</h2>
	// 				<p></p>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
}

export default Landing;