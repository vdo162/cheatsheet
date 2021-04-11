import style from'./App.module.css';
import {HashRouter, Route, Switch} from 'react-router-dom'

import {Header} from './Components/Header/Header'
import {Navbar} from './Components/Navbar/Navbar'
import {Main} from './Components/Main/Main'
import {CS50} from './Components/CS50/CS50'
import {HTML} from './Components/HTML/HTML'
import {JS} from './Components/JS/JS'
import {FlexBox} from './Components/FlexBox/FlexBox'
import {Bootstrup} from './Components/Bootstrup/Bootstrup'
import {SCSS} from './Components/SCSS/SCSS'
import {Media} from './Components/Media/Media'
import {React} from './Components/React/React'
import {Footer} from './Components/Footer/Footer'
import {NotFounded} from './Components/NotFounded/NotFounded'

const App = (props) => {
  return (
    <div className={style.App}>
		<div>
			<Header/>
		</div>
		<div>
			<Navbar/>
		</div>
		
		<div className={style.routes}>
			<Switch>
				<Route exact path='/' component={()=> <Main/>}/>
				<Route path='/main' component={()=><Main/>}/> 
				<Route path='/cs50' component={()=> <CS50/>}/>
				<Route path='/html' component={()=> <HTML/>}/>
				<Route path='/js' component={()=> <JS/>}/>
				<Route path='/flexbox' component={()=> <FlexBox/>}/>
				<Route path='/bootstrup' component={()=> <Bootstrup/>}/>
				<Route path='/scss' component={()=> <SCSS/>}/>
				<Route path='/media' component={()=> <Media/>}/>
				<Route path='/react' component={()=> <React/>}/>
				<Route path='*' component={()=> <NotFounded/>}/>
			</Switch>
		</div>
		
		<div  className={style.styleBottom}>
			<Footer/>
		</div>
    </div>
  );
}

const MainApp = (props) => {
	return <HashRouter>
		<App />
	</HashRouter>
}

export default MainApp;

