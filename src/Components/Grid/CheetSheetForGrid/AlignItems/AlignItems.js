import s from'./AlignItems.module.css';


export const AlignItems = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 50px 50px / 1fr 1fr 1fr; align-items: start;}'}
		<div className={s.grid1}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
		</div>
		
		{'.grid { display: grid; grid-template: 50px 50px / 1fr 1fr 1fr; align-items: center;}'}
		<div className={s.grid4}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
		</div>
		
		{'.grid { display: grid; grid-template: 50px 50px / 1fr 1fr 1fr; align-items: end;}'}
		<div className={s.grid3}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
		</div>
		
		{'.grid { display: grid; grid-template: 50px 50px / 1fr 1fr 1fr; align-items: stretch;}'}
		<div className={s.grid2}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
		</div>
	</div>
}