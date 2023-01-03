import React from 'react'
import styles from './BestStudio.module.scss'
import project from '../../img/bs.webp'
import ButtonForm from '../UI/ButtonFormOffer/ButtonFormOffer'

const BestStudio = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h5>
					Лучшая сеть студий лазерной эпиляции по версии премии AURORA AWARDS
					2019 "Beauty&Health"
				</h5>
				<div className={styles.images}>
					<img
						src={project}
						alt='Диплом премии AURORA AWARDS'
						width={550}
						height={450}
					/>
				</div>
			</div>
			<ButtonForm
				title='Записаться онлайн'
				link='https://b177562.yclients.com/select-city/2/select-branch?previousStepUrl=%2Fcompany%2F659154%2Fselect-services%3Fo%3D&o='
			/>
		</div>
	)
}

export default BestStudio
