import s from'./GridTemplate.module.css';


export const GridTemplate = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 30px 20vw / 30px 1fr 30px; }'}
		<div className={s.grid}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
		</div>
	</div>
}