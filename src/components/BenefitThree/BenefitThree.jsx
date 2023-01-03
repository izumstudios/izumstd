import React from 'react'
import styles from './BenefitThree.module.scss'
import three from '../../img/benefits/three.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BenefitThree = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.titles}>
				<h4>
					<span>Инновационная система охлаждения</span> IceCool
					и&nbsp;наконечник из&nbsp;натурального сапфира
				</h4>
				<p>Процедура проходит без боли, ожогов и раздражений</p>
			</div>
			<LazyLoadImage
				src={three}
				alt='Первое преимущество'
				effect='blur'
				className={styles.image}
			/>
		</div>
	)
}

export default BenefitThree
