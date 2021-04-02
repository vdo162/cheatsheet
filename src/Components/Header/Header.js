import style from'./Header.module.css';
import logo from '../../image/logoWithBackground.PNG'


export const Header = (props) => {
	return (
		<div className={style.Header}>
			<div >
				<img className={style.logo} src={logo}/>
			</div>
		</div>
	)
}