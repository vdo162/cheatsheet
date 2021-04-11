import {Switch, Route, Link} from'react-router-dom';
import s from'./FlexBox.module.css';
import {MainForFlex} from './MainForFlex/MainForFlex'
import {CheetSheetForFlex} from './CheetSheetForFlex/CheetSheetForFlex'
import {ExampleWithFlex} from './ExampleWithFlex/ExampleWithFlex'


export const FlexBox = (props) => {
	return <div>
		<div className={s.block}>
			<div className={s.blockItem}>
				<div className={s.blockContent}><Link to='/flexbox'>...</Link></div>
			</div>
			<div className={s.blockItem}>
				<div className={s.blockContent}><Link to='/flexbox/cheetsheet'>...</Link></div>
			</div>
			<div className={s.blockItem}>
				<div className={s.blockContent}><Link to='/flexbox/examplewithflex'>...</Link></div>
			</div>
		</div>
		
		<Switch>	
			<Route path='/flexbox/cheetsheet' render={CheetSheetForFlex}/>
			<Route path='/flexbox/examplewithflex' render={ExampleWithFlex}/>
			<Route path='/flexbox' render={MainForFlex}/>
		</Switch>
	</div>
}