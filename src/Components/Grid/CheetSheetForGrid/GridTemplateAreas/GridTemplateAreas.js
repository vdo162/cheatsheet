import s from'./GridTemplateAreas.module.css';


export const GridTemplateAreas = (props) => {
	return <div className={s.wrapper}>
		{'.grid { display: grid; grid-template: 1fr 2fr / 30px 1fr;	grid-template-areas: "h h" "s c"; } .gridItem {grid-area: h;}' }
		<div className={s.grid}>
			<div className={s.header}>1</div>
			<div className={s.side}>2</div>
			<div className={s.content}>3</div>
		</div>
	</div>
}