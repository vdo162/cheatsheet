import style from'./Navbar.module.css';
import {NavLink} from 'react-router-dom'


export const Navbar = (props) => {
	return (
	<div>
		<hr className={style.hr}/>
		<div className={style.blockRow}>
			<div className={style.blockCol}>
				<NavLink to='/main' activeClassName={style.activeLink}>Главная</NavLink>
			</div>
			<div className={style.blockCol}>
				<NavLink to='/cs50' activeClassName={style.activeLink}>Шаг 1: IT?</NavLink>
			</div>
			<div className={style.blockCol}>
				<NavLink to='/html' activeClassName={style.activeLink}>Шаг 2: HTML/CSS</NavLink>
			</div>
			<div className={style.blockCol}>
				<NavLink to='/js' activeClassName={style.activeLink}>Шаг 3: JS</NavLink>
			</div>
			<div className={style.blockCol}>
				<NavLink to='/flexbox' activeClassName={style.activeLink}>Шаг 4: FlexBox</NavLink>
			</div>
			<div className={style.blockCol}>
				<NavLink to='/bootstrup' activeClassName={style.activeLink}>Шаг 5: Bootstrup</NavLink>
			</div>
			<div className={style.blockCol}>
				<NavLink to='/scss' activeClassName={style.activeLink}>Шаг 6: SCSS</NavLink>
			</div>
			<div className={style.blockCol}>
				<NavLink to='/media' activeClassName={style.activeLink}>Шаг 7: Media</NavLink>
			</div>
			<div className={style.blockCol}>
				<NavLink to='/react' activeClassName={style.activeLink}>Шаг 8: React</NavLink>
			</div>	
		</div>
		<hr className={style.hr}/>
	</div>
	)
}