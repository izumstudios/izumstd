import { useEffect } from 'react'

const Marquiz = () => {
	const Marquiz = window.Marquiz

	useEffect(() => {
		;(function (t, p) {
			window.Marquiz
				? Marquiz.add([t, p])
				: document.addEventListener('marquizLoaded', function () {
						Marquiz.add([t, p])
				  })
		})('Pop', {
			id: '637b72b79384d8004f05c784',
			title: 'Пройти тест',
			text: 'Получить спецпредложение',
			delay: 1,
			textColor: '#ffffff',
			bgColor: '#722b4f',
			svgColor: '#ffffff',
			closeColor: '#ffffff',
			bonusCount: 0,
			type: 'side',
			position: 'position_bottom-right',
			rounded: true,
			shadow: 'rgba(114, 43, 79, 0)',
			blicked: true,
			pulse: 'rgba(114, 43, 79, 0.4)',
		})
	})
}

export default Marquiz
