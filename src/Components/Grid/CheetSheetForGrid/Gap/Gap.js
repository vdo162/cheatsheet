import s from'./Gap.module.css';


export const Gap = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; row-gap: 5px;}'}
		<div className={s.grid1}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
			<div className={s.gridItem}>7</div>
			<div className={s.gridItem}>8</div>
			<div className={s.gridItem}>9</div>
		</div>
		
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; column-gap: 5px;}'}
		<div className={s.grid2}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
			<div className={s.gridItem}>7</div>
			<div className={s.gridItem}>8</div>
			<div className={s.gridItem}>9</div>
		</div>
		
		{'.grid { display: grid; grid-template: 1fr 1fr / 1fr 1fr 1fr; gap: 5px;}'}
		<div className={s.grid3}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6</div>
			<div className={s.gridItem}>7</div>
			<div className={s.gridItem}>8</div>
			<div className={s.gridItem}>9</div>
		</div>
	</div>
}