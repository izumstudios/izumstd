import React from 'react'
import styles from './BenefitOne.module.scss'
import one from '../../img/benefits/one.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BenefitOne = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.titles}>
				<h4>
					<span>Мощный премиальный аппарат&nbsp;</span>&mdash; требуется меньше
					процедур в курсе
				</h4>
				<p>
					Один из&nbsp;самых мощных диодных лазеров в&nbsp;России&nbsp;&mdash;
					1000 Ватт при мощности аппарата 4000 Ватт <br /> Это в&nbsp;1,5 раза
					мощнее обычных
				</p>
			</div>
			<LazyLoadImage
				src={one}
				alt='Первое преимущество'
				effect='blur'
				className={styles.image}
			/>
		</div>
	)
}

export default BenefitOne
