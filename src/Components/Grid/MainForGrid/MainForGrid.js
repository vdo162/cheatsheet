import s from'./MainForGrid.module.css';


export const MainForGrid = (props) => {
	return <div className={s.conteiner}>
		<div className={s.content}>
		<div>
			<h1>Grid</h1>
		</div>
		<div>
			<p>Что же такое Grid Layout? Суть этого модуля заключается в разделении веб-страницы на столбцы и строки. В получившейся сетке можно размещать элементы. Управлять размерами и расположением этих элементов можно с помощью специальных свойств модуля.</p>
			<p>Эта способность позволяет очень гибко отображать элементы на экране без изменений структуры кода. Но то же самое умеет и Flex скажешь ты. И это верно, но фишка в том, что помимо прочего Grid умеет управлять элементами в двухмерной плоскости, то есть и по горизонтали и по вертикали одновременно. Flex же работает с одной осью – горизонтальной либо вертикальной. Отлично, но че там с кроссбраузерностью? На первый взгляд все не плохо. По данным сервиса Can I Use модуль Grid Layout Level 1 поддерживают 93% пользователей. Даже ослик 11й что-то понимает правда с префиксами. Но поскольку Grid Layout довольно большой модуль использующий множество свойств, проверять поддержку следует каждого свойства который захотите использовать.</p>
		</div>
		
		<h3>Список необходимых при изучении источников</h3>
		<div><a href='https://fls.guru/grid.html' target='_blank'>Шпаргалка по GRID от «Фрилансер по жизни»</a></div>
	
		<h3>Отличные видеоуроки от «Фрилансер по жизни»</h3>
		<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLM6XATa8CAG5pXQrW_kDaeZb_uIAMNZIm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='allowfullscreen'></iframe>
		</div>
	</div>
	</div>
}