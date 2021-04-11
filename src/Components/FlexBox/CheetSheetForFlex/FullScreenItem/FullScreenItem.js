import s from'./FullScreenItem.module.css';


export const FullScreenItem = (props) => {
	return <div className={s.fontColor}>
		{'.block_col { display: flex; direction: column; height: 700px; } + .block_item_2 { flex: 1 1 auto; }'}
		<div className={s.block}>
			<div className={s.block_raw}>
				<div className={s.block_col}>
					<div className={s.block_item}>1 header</div>
					<div className={s.block_item + ' ' + s.block_item_2}>2 body</div>
					<div className={s.block_item}>3 footer</div>
				</div>
			</div>
		</div>
	</div>
}