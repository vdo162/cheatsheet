import s from'./GridColumn.module.css';


export const GridColumn = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; } .gridItem1 {grid-column-start: 1; grid-column-end: 3;}'}
		<div className={s.grid}>
			<div className={s.gridItem + ' ' + s.gridItem1}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
		</div>
		
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; } .gridItem2 {grid-column-start: span 2;}'}
		<div className={s.grid}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem + ' ' + s.gridItem21}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
		</div>
		
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; } .gridItem2 {grid-column: 1 / 3;}'}
		<div className={s.grid}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem + ' ' + s.gridItem22}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
		</div>
	</div>
}