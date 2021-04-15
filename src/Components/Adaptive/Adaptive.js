import {Switch, Route, Link} from'react-router-dom';
import s from'./Adaptive.module.css';
import {Main} from './Main/Main'
import {Fix} from './Fix/Fix'


export const Adaptive = (props) => {
	return <div>
		<div className={s.block}>
			<div className={s.blockItem}>
				<div className={s.blockContent}><Link to='/adaptive'>...</Link></div>
			</div>
			<div className={s.blockItem}>
				<div className={s.blockContent}><Link to='/adaptive/fix'>...</Link></div>
			</div>
		</div>
		
		<Switch>	
			<Route path='/adaptive/fix' render={Fix}/>
			<Route path='/adaptive' render={Main}/>
		</Switch>
	</div>
}