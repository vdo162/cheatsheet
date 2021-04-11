import s from'./DirectionColumn.module.css';


export const DirectionColumn = (props) => {
	return <div className={s.fontColor}>
		{'.block_col { display: flex; flex-direction: column;}'}
		<div className={s.block}>
			<div className={s.block_raw}>
				<div className={s.block_col}>
					<div className={s.block_item}>11111 1 1<br/> 1 1</div>
					<div className={s.block_item}>22222222222222 2 2 2 <br/>2<br/>2</div>
					<div className={s.block_item}>3333333 3</div>
					<div className={s.block_item}>44444 4 4 4 4 4</div>
					<div className={s.block_item}>55555 5 5 5</div>
					<div className={s.block_item}>66666666666666</div>
				</div>
			</div>
		</div>
	</div>
}