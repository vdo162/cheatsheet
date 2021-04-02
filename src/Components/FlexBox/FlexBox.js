import style from'./FlexBox.module.css';
import {useState} from 'react'


export const FlexBox = (props) => {
	const [toggle, setToggle]=useState(false);
	return (
		<div>
			<div>
				<h1>FlexBox</h1>
			</div>
			<div>
				Flexbox - это целый модуль, содержащий в себе набор свойств и их значений как для родителя flex-контейнера так и для его дочерних элементов flex-элементов. Основным преимуществом гибкой FLEX разметки является возможность изменять ширину/высоту пространство вокруг и порядок flex-элементов, для того чтобы наилучшим образом заполнить доступное пространство flex-контейнера.
			</div>
			<div><a href='https://medium.com/@stasonmars/%D0%B2%D0%B5%CC%88%D1%80%D1%81%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0-flexbox-%D0%B2-css-%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B8%CC%86-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-e26662cf87e0'>Cправочник-руководство по работе с flexbox и его свойствами</a></div>
			<div><a href='https://wp-kama.ru/id_8045/flex-v-css.html/comment-page-1'>То же, но более доступно</a></div>
			<div><a href='https://fls.guru/flexbox.html'>Шпаргалка по FLEXBOX от «Фрилансер по жизни»</a></div>
			
			{/*<div>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/EO8hH_2OwCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<div>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/uPYUgipiFcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/cXAUxbu6X2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<div>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/8Gu40PFzOHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>*/}
			
			<div>
				<button onClick={()=>setToggle(!toggle)}>Шпаргалка</button>
				{toggle && <div>
					<div>
						<p>Свойства контейнера</p>
						<div>
							{'.block_cal {display: flex}'};
							<div className={style.block1}>
								<div className={style.block_raw}>
									<div className={style.block_cal1}>
										<div className={style.block_item}>
											1
										</div>
										<div className={style.block_item}>
											2
										</div>
										<div className={style.block_item}>
											3
										</div>
									</div>
								</div>
							</div>
							{'.block_cal {display: inline-flex} + .block{text-align: center;}'};
							<div className={style.block2}>
								<div className={style.block_raw}>
									<div className={style.block_cal2}>
										<div className={style.block_item}>
											1
										</div>
										<div className={style.block_item}>
											2
										</div>
										<div className={style.block_item}>
											3
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>}
			</div>
		</div>
	)
}