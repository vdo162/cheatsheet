import s from'./MarginAuto.module.css';


export const MarginAuto = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 50px / 1fr 1fr 1fr;} .gridItem1 {margin: auto;} .gridItem2 {margin: 0 auto;} .gridItem3 {margin: auto 0;}'}
		<div className={s.grid}>
			<div className={s.gridItem + ' ' + s.gridItem1}>1</div>
			<div className={s.gridItem + ' ' + s.gridItem2}>2</div>
			<div className={s.gridItem + ' ' + s.gridItem3}>3</div>
		</div>
	</div>
}