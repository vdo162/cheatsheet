import s from'./GridRowAndColumn.module.css';


export const GridRowAndColumn = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; } .gridItem1 {grid-row-start: 2; grid-column-start: 3;}'}
		<div className={s.grid}>
			<div className={s.gridItem + ' ' + s.gridItem1}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
		</div>
	</div>
}