import React from 'react'
import styles from './BenefitFour.module.scss'
import four from '../../img/benefits/four.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BenefitFour = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<LazyLoadImage
				src={four}
				alt='Первое преимущество'
				effect='blur'
				className={styles.image}
			/>
			<div className={styles.titles}>
				<h4>
					<span>Безопасная</span> процедура
				</h4>
				<p>
					Риск ожогов исключен благодаря автоматической настройке мощности для
					каждой зоны эпиляции. <br /> Можно эпилировать все тело: лицо, шея,
					подмышки, живот, грудь, спина, руки, ноги, пальцы
				</p>
			</div>
		</div>
	)
}

export default BenefitFour
