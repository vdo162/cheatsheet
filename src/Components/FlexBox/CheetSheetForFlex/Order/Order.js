import s from'./Order.module.css';


export const Order = (props) => {
	return <div className={s.fontColor}>
		{'.block_col { display: flex; } + .block_item_1 {order: 3;} .block_item_2 {order: 1;} .block_item_3 {order: 4;} .block_item_5 {order: 2;}'}
		<div className={s.block}>
			<div className={s.block_raw}>
				<div className={s.block_col}>
					<div className={s.block_item + ' ' + s.block_item_1}>11111 1 1<br/> 1 1</div>
					<div className={s.block_item + ' ' + s.block_item_2}>22222222222222 2 2 2 <br/>2<br/>2</div>
					<div className={s.block_item + ' ' + s.block_item_3}>3333333 3</div>
					<div className={s.block_item + ' ' + s.block_item_4}>44444 4 4 4 4 4</div>
					<div className={s.block_item + ' ' + s.block_item_5}>55555 5 5 5</div>
					<div className={s.block_item + ' ' + s.block_item_6}>66666666666666</div>
				</div>
			</div>
		</div>
	</div>
}