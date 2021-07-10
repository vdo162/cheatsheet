import style from'./Navbar.module.css';
import {NavLink} from 'react-router-dom'


export const Navbar = (props) => {
	return (
	<div>
		<div className={style.blockRow}>
			<div className={style.blockPadding + ' ' + style.top}></div>
			<NavLink to='/main' className={style.noActiveLink} activeClassName={style.activeLink}>Главная</NavLink>
			<NavLink to='/cs50' className={style.noActiveLink} activeClassName={style.activeLink}>Шаг 1: IT?</NavLink>
			<NavLink to='/html' className={style.noActiveLink} activeClassName={style.activeLink}>Шаг 2: HTML/CSS</NavLink>
			<NavLink to='/js' className={style.noActiveLink} activeClassName={style.activeLink}>Шаг 3: JS</NavLink>
			<NavLink to='/flexbox' className={style.noActiveLink} activeClassName={style.activeLink}>Шаг 4: FlexBox</NavLink>
			<NavLink to='/grid' className={style.noActiveLink} activeClassName={style.activeLink}>Шаг 4.5: Grid</NavLink>
			<NavLink to='/bootstrup' className={style.noActiveLink} activeClassName={style.activeLink}>Шаг 5: Bootstrup</NavLink>
			<NavLink to='/scss' className={style.noActiveLink} activeClassName={style.activeLink}>Шаг 6: SCSS</NavLink>
			<NavLink to='/adaptive' className={style.noActiveLink} activeClassName={style.activeLink}>Шаг 7: Adaptive</NavLink>
			<NavLink to='/react' className={style.noActiveLink} activeClassName={style.activeLink}>Шаг 8: React</NavLink>
			<div className={style.blockPadding}></div>			
		</div>
		<br/>
	</div>
	)
}