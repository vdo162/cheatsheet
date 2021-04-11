import s from'./ExampleWithFlex.module.css';
import logo from './logo.PNG';
import icon from './icon.png';
import what from './what.png';
import col from './col.png';


export const ExampleWithFlex = (props) => {
	return <div className={s.page}>
		<div className={s.header}>
			<div className={s.header_hello}>
				<div className={s.header_header}>
					Привет , друг!
				</div>
				<div>
					<li>
						<div className={s.header_icon}><img src={icon}/></div>
						<div>У тебя все получится!</div>
					</li>
					<li>
						<div className={s.header_icon}><img src={icon}/></div>
						<div>Никогда не сдавайся!</div>
					</li>
					<li>
						<div className={s.header_icon}><img src={icon}/></div>
						<div>Сегодня ты уже знаешьбольше чем вчера!</div>
					</li>
					<li>
						<div className={s.header_icon}><img src={icon}/></div>
						<div>Спасибо за поддержку!</div>
					</li>
				</div>
			</div>
			<div className={s.header_logo}>
				<img src={logo}/>
			</div>
		</div>
		<div className={s.what}>
			<div className={s.what_image}>
				<img src={what}/>
			</div>
			<div className={s.what_about}>
				<div className={s.what_header}>
					Что такое FlexBox?
				</div>
				<div className={s.what_p}>
					FlexBox - это целый модуль, содержащий в себе набор свойств и их значений как для родителя flex-контейнера так и для его дочерних элементов flex-элементов.
				</div>
				<div className={s.what_p}>
					Основным преимуществом гибкой FLEX разметки является возможность изменять ширину/высоту пространство вокруг и порядок flex-элементов, для того чтобы наилучшим образом заполнить доступное пространство flex-контейнера.
				</div>
			</div>
		</div>
		<div className={s.columns}>
			<div className={s.columns_header}>
				Колонки c flex-контейнерами 
			</div>
			<div className={s.columns_row}>
				<div className={s.columns_col}>
					<div className={s.columns_content}>
						<img src={col}/>
						<div className={s.columns_text}>
							<h2>Lorem ipsum</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
							</p>
						</div>
					</div>
				</div>
				<div className={s.columns_col}>
					<div className={s.columns_content}>
						<img src={col}/>
						<div className={s.columns_text}>
							<h2>Neque porro</h2>
							<p>
								Natus error sit voluptatem accusantium doloremque laudantium.
							</p>
						</div>
					</div>
				</div>
				<div className={s.columns_col}>
					<div className={s.columns_content}>
						<img src={col}/>
						<div className={s.columns_text}>
							<h2>Voluptate velit esse</h2>
							<p>
								Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.
							</p>
						</div>
					</div>
				</div>
				<div className={s.columns_col}>
					<div className={s.columns_content}>
						<img src={col}/>
						<div className={s.columns_text}>
							<h2>Nisi ut aliquid</h2>
							<p>
								Possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={s.vertical}>
			<div className={s.vertical_header}>
				Веритикальное выравнивание
			</div>
			<div className={s.vertical_row}>
				<div className={s.vertical_col}>
					<div className={s.vertical_item}>
						<div className={s.glad_header}>
							БУДУ РАД
						</div>
						<div className={s.glad_its}>
							подписке
						</div>
						<div className={s.glad_loren}>
							<p>
								Ossimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam .
							</p>
						</div>
						<div className={s.glad_botton}>
							<a href='' className={s.glad_botton_text}>
								подписаться
							</a>
						</div>
					</div>
				</div>
				<div className={s.vertical_col}>
					<div className={s.vertical_item}>
						<div className={s.glad_header}>
							БУДУ РАД
						</div>
						<div className={s.glad_its}>
							 лайку
						</div>
						<div className={s.glad_loren}>
							<p>
								Ossimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates.
							</p>
							<p>
								Ossimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates.
							</p>
						</div>
						<div className={s.glad_botton}>
							<a href=''  className={s.glad_botton_text}>
								лайк
							</a>
						</div>
					</div>
				</div>
				<div className={s.vertical_col}>
					<div className={s.vertical_item}>
						<div className={s.glad_header}>
							БУДУ РАД
						</div>
						<div className={s.glad_its}>
							комментарию
						</div>
						<div className={s.glad_loren}>
							<p>
								Ossimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates.
							</p>
						</div>
						<div className={s.glad_botton}>
							<a href='' className={s.glad_botton_text}>
								комментировать
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={s.footer}>
			<div>
				VAITISHNIK 2021
			</div>
		</div>
	</div>
}