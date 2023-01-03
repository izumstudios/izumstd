import React from 'react'
import styles from './BenefitTwo.module.scss'
import two from '../../img/benefits/two.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import ButtonForm from '../UI/ButtonFormOffer/ButtonFormOffer'

const BenefitTwo = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.benefit__two}>
				<LazyLoadImage
					src={two}
					alt='Первое преимущество'
					effect='blur'
					className={styles.image}
				/>
				<div className={styles.titles}>
					<h4>
						<span>Рекордная</span> скорость процедуры
					</h4>
					<p>
						1&nbsp;час &laquo;Всё тело&raquo; за&nbsp;счёт высокочастотного
						импульса 10гц
					</p>
				</div>
			</div>
			<ButtonForm
				title='Получить спецпредложение'
				link='https://b177562.yclients.com/select-city/2/select-branch?previousStepUrl=%2Fcompany%2F659154%2Fselect-services%3Fo%3D&o='
			/>
		</div>
	)
}

export default BenefitTwo
