import s from'./CS50.module.css';

export const CS50 = (props) => {
	return (
		<div className={s.conteiner}>
			<p>CS50 (Computer Science 50) — вводный офлайн и онлайн курс о компьютерных технологиях Гарвардского и, начиная с 2015 года, Йельского университета. Материал курса доступен бесплатно.</p>
			<p>Этот курс дает общее представление об IT-индустрии, в нем рассмотрено множество различных технологий и языков программирования. Рекомендую смотреть лекции в процессе обучения чтобы просто отдохнуть за каким-нибудь приемом пищи) В курсе также доступны и практичесике задания, если есть желание и время, можете их выполнить, но это необязательно. Для наших целей необходимо получить общее представление о том, чем занимаюся программисты и какие направления существуют в IT, а для этого достаточно простого просмотра лекций.</p>

			<h3>Плелист курса CS50 (23 лекции)</h3>
			<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLawfWYMUziZqyUL5QDLVbe3j5BKWj42E5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
			</div>
		</div>
	)
}