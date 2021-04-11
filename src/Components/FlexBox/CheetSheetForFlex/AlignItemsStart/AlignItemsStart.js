import s from'./AlignItemsStart.module.css';


export const AlignItemsStart = (props) => {
	return <div className={s.fontColor}>
		{'.block_col { display: flex; align-items: flex-start; }'}
		<div className={s.block}>
			<div className={s.block_raw}>
				<div className={s.block_col}>
					<div className={s.block_item}>11111 1 1<br/> 1 1</div>
					<div className={s.block_item}>22222222222222 2 2 2 <br/>2<br/>2</div>
					<div className={s.block_item + ' ' + s.fontSize}>3333 font-size: 40px;</div>
					<div className={s.block_item}>44444 4 4 4 4 4</div>
					<div className={s.block_item}>55555 5 5 5</div>
					<div className={s.block_item}>66666666666666</div>
				</div>
			</div>
		</div>
	</div>
}