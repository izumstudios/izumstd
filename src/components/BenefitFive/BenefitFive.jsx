import React from 'react'
import styles from './BenefitFive.module.scss'
import five from '../../img/benefits/five.webp'
import ButtonForm from '../UI/ButtonFormOffer/ButtonFormOffer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BenefitFive = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.benefit__five}>
				<div className={styles.titles}>
					<h4>
						<span>Стойкий</span> результат уже за 8-10 процедур
					</h4>
					<p>
						С&nbsp;каждой процедурой бриться нужно реже <br /> Кожа становится
						мягкой и гладкой. <br /> Выпавший волос больше не&nbsp;вырастет.{' '}
						<br /> Эффект на&nbsp;несколько лет.
					</p>
				</div>
				<LazyLoadImage
					src={five}
					alt='Первое преимущество'
					effect='blur'
					className={styles.image}
				/>
			</div>
			<ButtonForm
				title='Заказать обратный звонок'
				link='https://b177562.yclients.com/select-city/2/select-branch?previousStepUrl=%2Fcompany%2F659154%2Fselect-services%3Fo%3D&o='
			/>
		</div>
	)
}

export default BenefitFive
