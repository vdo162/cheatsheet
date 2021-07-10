import s from'./CheetSheetForGrid.module.css';
import {GridTemplateColumns} from'./GridTemplateColumns/GridTemplateColumns';
import {GridTemplateRows} from'./GridTemplateRows/GridTemplateRows';
import {GridTemplate} from'./GridTemplate/GridTemplate';
import {GridTemplateAreas} from'./GridTemplateAreas/GridTemplateAreas';
import {GridAutoRows} from'./GridAutoRows/GridAutoRows';
import {GridAutoFlow} from'./GridAutoFlow/GridAutoFlow';
import {GridRow} from'./GridRow/GridRow';
import {GridColumn} from'./GridColumn/GridColumn';
import {GridRowAndColumn} from'./GridRowAndColumn/GridRowAndColumn';
import {Order} from'./Order/Order';
import {JustifyItems} from'./JustifyItems/JustifyItems';
import {AlignItems} from'./AlignItems/AlignItems';
import {JustifyAlignSelf} from'./JustifyAlignSelf/JustifyAlignSelf';
import {MarginAuto} from'./MarginAuto/MarginAuto';
import {Gap} from'./Gap/Gap';

export const CheetSheetForGrid = (props) => {
	return <div className={s.main}>
			<p>
				<span className={s.wrapper}>.wrapper</span>
				<span className={s.content}>.content</span>
				<span className={s.grid}>.grid</span>
				<span className={s.gridBody}>.gridBody</span>
				<span className={s.gridItem}>.gridItem</span>
			</p>
			<p>
				<h2>Определение сетки</h2>
			</p>
			<h3>grid-template-columns</h3>
			<GridTemplateColumns/>
			
			<h3>grid-template-rows</h3>
			<GridTemplateRows/>
			
			<h3>grid-template</h3>
			<GridTemplate/>
			
			<p>
				<h2>Имена полей</h2>
			</p>
			<h3>grid-template-areas & grid-area</h3>
			<GridTemplateAreas/>
			
			<p>
				<h2>Неявная сетка</h2>
			</p>
			<h3>grid-auto-rows</h3>
			<GridAutoRows/>
			<h3>grid-auto-flow</h3>
			<GridAutoFlow/>
			
			<p>
				<h2>Элементы сетки</h2>
			</p>
			<h3>grid-row</h3>
			<GridRow/>
			<h3>grid-column</h3>
			<GridColumn/>
			<h3>grid-row & grid-column</h3>
			<GridRowAndColumn/>
			
			<p>
				<h2>Порядок вывода</h2>
			</p>
			<h3>order</h3>
			<Order/>
			
			<p>
				<h2>Выравнивание</h2>
			</p>
			<h3>justify-items</h3>
			<JustifyItems/>
			<h3>align-items</h3>
			<AlignItems/>
			<h3>justify-self & align-self</h3>
			<JustifyAlignSelf/>
			<h3>margin</h3>
			<MarginAuto/>
			
			<p>
				<h2>Промежутки</h2>
			</p>
			<h3>gap</h3>
			<Gap/>
			{/*<h3>Задание строк и столбцов</h3>
			<div className={s.wrapper}>
				<div className={s.content}>
					<div className={s.grid}>
						<div className={s.gridBody}>
							<div className={s.gridItem}>1</div>
							<div className={s.gridItem}>2</div>
							<div className={s.gridItem}>3</div>
							<div className={s.gridItem}>4</div>
							<div className={s.gridItem}>5</div>
							<div className={s.gridItem}>6</div>
							<div className={s.gridItem}>7</div>
						</div>
					</div>
				</div>
			</div>*/}
	</div>
}