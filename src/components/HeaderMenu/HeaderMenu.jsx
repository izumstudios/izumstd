import React from 'react'
import phone from '../../img/phone.svg'
import styles from './HeaderMenu.module.scss'

const HeaderMenu = () => {
	return (
		<div className={styles.header__menu} id='Top'>
			<div className={styles.header__menu_item}>
				<ul>
					<li>6 студий в Москве</li>
					<li>Ежедневно с 10 до 22</li>
					<li>
						<a className='mgo-number' href='tel:+74951506977'>
							<img src={phone} alt='Телефон' width={16} height={16} />8 (495)
							150-69-77
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderMenu
