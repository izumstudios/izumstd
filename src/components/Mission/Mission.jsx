import React from 'react'
import styles from './Mission.module.scss'
import heart from '../../img/black_heart.svg'
import ButtonForm from '../UI/ButtonFormOffer/ButtonFormOffer'

const Mission = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titles}>
				<h1>Миссия #IZUM</h1>
				<span>
					Избавить людей от проблем, связанных с удалением нежелательных волос,
					повышая их чувство уверенности в себе.
				</span>
				<p>
					С&nbsp;2018 года мы&nbsp;даем людям возможность делать свою кожу
					гладкой, ухоженной и&nbsp;красивой благодаря безопасной лазерной
					эпиляции. Мы&nbsp;не&nbsp;тратим средства клиентов на&nbsp;лишние
					пространства и&nbsp;атрибуты. Концепция сети #IZUM сделана
					в&nbsp;формате моно услуги&nbsp;&mdash; мы&nbsp;делаем только лазерную
					эпиляцию. В&nbsp;наших студиях используются одни из&nbsp;самых мощных
					лазеров в&nbsp;России.
				</p>
				<span>
					Рады видеть Вас в сети студий #IZUM.
					<img src={heart} alt='сердечко' width={25} height={25} />
				</span>
			</div>
			<ButtonForm
				title='Получить спецпредложение'
				link='https://b177562.yclients.com/select-city/2/select-branch?previousStepUrl=%2Fcompany%2F659154%2Fselect-services%3Fo%3D&o='
			/>
		</div>
	)
}

export default Mission
