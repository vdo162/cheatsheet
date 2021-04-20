import {Switch, Route, Link} from'react-router-dom';
import s from'./Adaptive.module.css';
import {Main} from './Main/Main'
import {Example} from './Example/Example'


export const Adaptive = (props) => {
	return <div className={s.conteiner}>
		<div className={s.content}>
			<div className={s.block}>
				<div className={s.blockItem}>
					<div className={s.blockContent}><Link to='/adaptive'><img className={s.button} /></Link></div>
				</div>
				<div className={s.blockItem}>
					<div className={s.blockContent}><Link to='/adaptive/example'>...</Link></div>
				</div>
			</div>
			
			<Switch>	
				<Route path='/adaptive/example' render={Example}/>
				<Route path='/adaptive' render={Main}/>
			</Switch>
		</div>
	</div>
}