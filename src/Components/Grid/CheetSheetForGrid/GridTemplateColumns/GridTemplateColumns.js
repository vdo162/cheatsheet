import s from'./GridTemplateColumns.module.css';


export const GridTemplateColumns = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template-columns: 50px 30% 1fr 2fr auto auto; }'}
		<div className={s.grid1}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6 Lorem ipsum dolor sit amet, consectetur.</div>
			<div className={s.gridItem}>77 77 77 77 77</div>
			<div className={s.gridItem}>8</div>
			<div className={s.gridItem}>999</div>
			<div className={s.gridItem}>10</div>
			<div className={s.gridItem}>11</div>
			<div className={s.gridItem}>12</div>
		</div>
		<br/>
		{'.grid { display: grid; grid-template-columns: 30vh minmax(300px, 400px) fit-content(300px); }'}
		<div className={s.grid2}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6 Lorem ipsum dolor sit amet, consectetur.</div>
			<div className={s.gridItem}>77 77 77 77 77</div>
			<div className={s.gridItem}>8</div>
			<div className={s.gridItem}>999</div>
			<div className={s.gridItem}>10</div>
			<div className={s.gridItem}>11</div>
			<div className={s.gridItem}>12</div>
		</div>
		<br/>
		{'.grid { display: grid; grid-template-columns: 50px repeat(3, 0.2fr); }'}
		<div className={s.grid3}>
			<div className={s.gridItem}>1</div>
			<div className={s.gridItem}>2</div>
			<div className={s.gridItem}>3</div>
			<div className={s.gridItem}>4</div>
			<div className={s.gridItem}>5</div>
			<div className={s.gridItem}>6 Lorem ipsum dolor sit amet, consectetur.</div>
			<div className={s.gridItem}>77 77 77 77 77</div>
			<div className={s.gridItem}>8</div>
			<div className={s.gridItem}>999</div>
			<div className={s.gridItem}>10</div>
			<div className={s.gridItem}>11</div>
			<div className={s.gridItem}>12</div>
		</div>
	</div>
}