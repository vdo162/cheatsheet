import s from'./GridAutoRows.module.css';


export const GridAutoRows = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; grid-auto-rows: 100px; }'}
		<div className={s.grid}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
			<div className={s.gridItem}>7</div>
		</div>
	</div>
}