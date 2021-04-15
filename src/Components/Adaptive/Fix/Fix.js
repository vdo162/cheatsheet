import s from'./Fix.module.css';



export const Fix = (props) => {
	return <div className={s.main}>
	
		<div className={s.header}>
			<div className={s.logo}/>
			<div  className={s.menu}>
				<div className={s.buttom}></div>
				<div className={s.buttom}></div>
				<div className={s.buttom}></div>
				<div className={s.buttom}></div>
			</div>
		</div>
		
		<div className={s.body}> 
			<div className={s.bodyContainer}>
				<div className={s.threeRow}>
					<div className={s.threeCol}>
							<div className={s.threeImg}></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
					</div><div className={s.threeCol}>
							<div className={s.threeImg}></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
					</div><div className={s.threeCol}>
							<div className={s.threeImg}></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
					</div>
				</div>
				
			</div>
		</div>
		
		<div className={s.footer}></div>	
	</div>
}