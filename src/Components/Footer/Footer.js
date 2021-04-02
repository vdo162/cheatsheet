import style from'./Footer.module.css';
import logo from '../../image/logo.PNG'


export const Footer = (props) => {
	return (
		<div  className={style.Bottom}>
			<hr color='#19365f'/>
			<div>
				© 2021 Все права пренадлежат правообладателям
			</div>
			<div>
				vk gmail hh githab
			</div>
			<div className={style.logo}>
				<img src={logo}/>
			</div>		
		</div>
	)
}