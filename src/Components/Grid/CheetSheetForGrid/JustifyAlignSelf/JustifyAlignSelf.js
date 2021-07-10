import s from'./JustifyAlignSelf.module.css';


export const JustifyAlignSelf = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 50px / 1fr 1fr 1fr;} .gridItem1 {justify-self: end; align-self: end;}'}
		<div className={s.grid}>
			<div className={s.gridItem + ' ' + s.gridItem1}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
		</div>
	</div>
}