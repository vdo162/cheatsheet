import s from'./CheetSheetForFlex.module.css';

import {Flex} from './Flex/Flex'
import {InlineFlex} from './InlineFlex/InlineFlex'
import {InlineFlexCenter} from './InlineFlexCenter/InlineFlexCenter'
import {JustifyStart} from './JustifyStart/JustifyStart'
import {JustifyEnd} from './JustifyEnd/JustifyEnd'
import {JustifyCenter} from './JustifyCenter/JustifyCenter'
import {JustifyBetween} from './JustifyBetween/JustifyBetween'
import {JustifyAround} from './JustifyAround/JustifyAround'
import {AlignItemsStretch} from './AlignItemsStretch/AlignItemsStretch'
import {AlignItemsStart} from './AlignItemsStart/AlignItemsStart'
import {AlignItemsEnd} from './AlignItemsEnd/AlignItemsEnd'
import {AlignItemsCenter} from './AlignItemsCenter/AlignItemsCenter'
import {AlignItemsBaseline} from './AlignItemsBaseline/AlignItemsBaseline'
import {Wrap} from './Wrap/Wrap'
import {WrapNo} from './WrapNo/WrapNo'
import {WrapReverse} from './WrapReverse/WrapReverse'
import {AlignSelfCenter} from './AlignSelfCenter/AlignSelfCenter'
import {AlignSelfEnd} from './AlignSelfEnd/AlignSelfEnd'
import {AlignSelfStart} from './AlignSelfStart/AlignSelfStart'
import {AlignSelfStretch} from './AlignSelfStretch/AlignSelfStretch'
import {Order} from './Order/Order'
import {Basis} from './Basis/Basis'
import {Grow} from './Grow/Grow'
import {Shrink} from './Shrink/Shrink'
import {DirectionRow} from './DirectionRow/DirectionRow'
import {DirectionRowReverse} from './DirectionRowReverse/DirectionRowReverse'
import {DirectionColumn} from './DirectionColumn/DirectionColumn'
import {DirectionColumnReverse} from './DirectionColumnReverse/DirectionColumnReverse'
import {FullScreenItem} from './FullScreenItem/FullScreenItem'

export const CheetSheetForFlex = (props) => {
	return <div className={s.main}>
			<p>
				<span className={s.colorOfBlock}>.block</span>
				<span className={s.colorOfBlockRow}>.block_raw</span>
				<span className={s.colorOfBlockCol}>.block_col</span>
				<span className={s.colorOfBlockItem}>.block_item</span>
			</p>
			<p>
				<h2>Свойства контейнера</h2>
			</p>
			
			<h3>display</h3>
			<Flex/>
			<InlineFlex/>
			<InlineFlexCenter/>
			
			<h3>justify-content</h3>
			<JustifyStart/>
			<JustifyEnd/>
			<JustifyCenter/>
			<JustifyBetween/>
			<JustifyAround/>
			
			<h3>align-items</h3>
			<AlignItemsStretch/>
			<AlignItemsStart/>
			<AlignItemsEnd/>
			<AlignItemsCenter/>
			<AlignItemsBaseline/>
			
			<h3>flex-wrap</h3>
			<Wrap/>
			<WrapNo/>
			<WrapReverse/>
			
			<p>
				<h2>Свойства элемента</h2>
			</p>
			
			<h3>align-self</h3>
			<AlignSelfCenter/>
			<AlignSelfEnd/>
			<AlignSelfStart/>
			<AlignSelfStretch/>
			
			<h3>order</h3>
			<Order/>
			
			<h3>flex-basis</h3>
			<Basis/>
			
			<h3>flex-grow</h3>
			<Grow/>
			
			<h3>flex-shrink</h3>
			<Shrink/>
			
			<h3>flex = flex-basis + flex-grow + flex-shrink = {'{ flex: 0 1 auto; }'}</h3>
			
			<h3>flex-direction</h3>
			<DirectionRow/>
			<DirectionRowReverse/>
			<DirectionColumn/>
			<DirectionColumnReverse/>
			
			<h3>full screen item</h3>
			<FullScreenItem/>
	</div>
}