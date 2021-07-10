import s from'./GridAutoFlow.module.css';


export const GridAutoFlow = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; grid-auto-flow: row; }'}
		<div className={s.grid1}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
			<div className={s.gridItem}>7</div>
		</div>
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; grid-auto-flow: column; }'}
		<div className={s.grid2}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
			<div className={s.gridItem}>7</div>
		</div>
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; grid-auto-flow: dense; }'}
		<div className={s.grid3}>
			<div className={s.gridItem}>1 dense заполняет пустые места</div>
			<div className={s.gridItem}>2 может менять порядок</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
			<div className={s.gridItem}>7</div>
		</div>
	</div>
}