import s from'./Order.module.css';


export const Order = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 1fr / 1fr 1fr 1fr; } .gridItem1 {order: 2;} .gridItem2 {order: 3;} .gridItem3 {order: 1;}'}
		<div className={s.grid}>
			<div className={s.gridItem1}>1</div>
			<div className={s.gridItem2}>2</div>
			<div className={s.gridItem3}>3</div>
		</div>
	</div>
}