import s from'./GridTemplateRows.module.css';


export const GridTemplateRows = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template-rows: 40px 1fr 1fr; }'}
		<div className={s.grid}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}> 2<br/>2<br/>2 </div>
			<div className={s.gridItem}>3</div>
		</div>
	</div>
}