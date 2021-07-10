import s from'./GridRow.module.css';


export const GridRow = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; } .gridItem1 {grid-row-start: 1; grid-row-end: 3;}'}
		<div className={s.grid}>
			<div className={s.gridItem + ' ' + s.gridItem1}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
		</div>
		
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; } .gridItem2 {grid-row-start: span 2;}'}
		<div className={s.grid}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem + ' ' + s.gridItem2}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
		</div>
		
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; } .gridItem3 {grid-row: 1 / 3;}'}
		<div className={s.grid}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem + ' ' + s.gridItem3}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
		</div>
	</div>
}