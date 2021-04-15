import s from'./Main.module.css';


export const Main = (props) => {
	return <div className={s.conteiner}>
		<div className={s.content}>
			<div>
				<h1>Adaptive</h1>
			</div>
			<div>
				Адаптивная вёрстка позволяет веб-страницам подстраиваться (адаптироваться) под различные размеры мониторов ПК, экранов планшетов и смартфонов.  И чтобы эффективно потреблять трафик с мобильных устройств, нужно предлагать пользователям сайты с максимально удобным, адаптивным интерфейсом. Помимо этого, адаптивные сайты имеют приоритет при поисковой выдаче. Одним словом, адаптивная верстка сегодня крайне важна, и любому мастеру нужно уметь её делать и делать хорошо!
			</div>
		
			<h3>Отличныq видеоурок от «Фрилансер по жизни»</h3>
			<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/XbnAKjjlgc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
			</div>
		</div>
	</div>
}