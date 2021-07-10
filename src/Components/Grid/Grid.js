import {Switch, Route, Link} from'react-router-dom';
import s from'./Grid.module.css';
import {MainForGrid} from './MainForGrid/MainForGrid'
import {CheetSheetForGrid} from './CheetSheetForGrid/CheetSheetForGrid'
import {ExampleWithGrid} from './ExampleWithGrid/ExampleWithGrid'


export const Grid = (props) => {
	return <div>
		<div className={s.block}>
			<div className={s.blockItem}>
				<div className={s.blockContent}><Link to='/Grid'>...</Link></div>
			</div>
			<div className={s.blockItem}>
				<div className={s.blockContent}><Link to='/Grid/cheetsheet'>...</Link></div>
			</div>
			<div className={s.blockItem}>
				<div className={s.blockContent}><Link to='/Grid/examplewithgrid'>...</Link></div>
			</div>
		</div>
		
		<Switch>	
			<Route path='/Grid/cheetsheet' render={CheetSheetForGrid}/>
			<Route path='/Grid/examplewithgrid' render={ExampleWithGrid}/>
			<Route path='/Grid' render={MainForGrid}/>
		</Switch>
	</div>
}