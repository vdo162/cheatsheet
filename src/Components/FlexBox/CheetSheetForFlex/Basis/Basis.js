import s from'./Basis.module.css';


export const Basis = (props) => {
	return <div className={s.fontColor}>
		{'.block_col { display: flex;} .block_item { flex-basis: 10%; } для 3-го { flex-basis: auto; } для 5-го { flex-basis: 120px; }'}
		<div className={s.block}>
			<div className={s.block_raw}>
				<div className={s.block_col}>
					<div className={s.block_item}>11111 1 1<br/> 1 1</div>
					<div className={s.block_item}>22222222222222 2 2 2 <br/>2<br/>2</div>
					<div className={s.block_item + ' ' + s.block_item_3}>3333333 3</div>
					<div className={s.block_item}>44444 4 4 4 4 4</div>
					<div className={s.block_item + ' ' + s.block_item_5}>55555 5 5 5</div>
					<div className={s.block_item}>66666666666666</div>
				</div>
			</div>
		</div>
	</div>
}