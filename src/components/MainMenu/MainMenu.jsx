import React, { useState } from 'react'
import logo from '../../img/logo.svg'
import styles from './MainMenu.module.scss'
import { Link } from 'react-scroll'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import arrowDown from '../../img/arrownav.svg'
import phone from '../../img/phone.svg'

const menu = [
	{
		id: 1,
		menuName: 'Главная',
		toLink: 'Top',
	},
	{
		id: 2,
		menuName: 'О нас',
		toLink: 'Apparat',
	},
	{
		id: 3,
		menuName: 'Наши специалисты',
		toLink: 'Masters',
	},
	{
		id: 4,
		menuName: 'Отзывы',
		toLink: 'Reviews',
	},
	{
		id: 5,
		menuName: 'Цены',
		toLink: 'Price',
	},
	{
		id: 6,
		menuName: 'Контакты',
		toLink: 'Contacts',
	},
]

const MainMenu = () => {
	const [nav, setNav] = useState(false)
	return (
		<div className={styles.container}>
			<nav>
				<Link
					to='Top'
					spy={true}
					offset={30}
					smooth={true}
					duration={300}
					activeClass={styles.active}
					href='/'
				>
					<img src={logo} alt='Логотип izumstudios' width={125} height={79} />
				</Link>
				<div className={styles.mainMenu}>
					<ul>
						<li>
							<Link
								to='Top'
								spy={true}
								offset={-40}
								smooth={true}
								duration={300}
								activeClass={styles.active}
								href='/'
							>
								Главная
							</Link>
						</li>
						<li className={styles.pop}>
							<Link
								spy={true}
								offset={-40}
								smooth={true}
								duration={300}
								activeClass={styles.active}
								href='/'
							>
								О нас{' '}
								<img src={arrowDown} alt='стрелка' width={14} height={14} />
								<div className={styles.popupchik}>
									<ul>
										<li>
											<Link
												to='Masters'
												spy={true}
												offset={-40}
												smooth={true}
												duration={300}
												activeClass={styles.active}
												href='/'
											>
												Наши специалисты
											</Link>
										</li>
										<li>
											<Link
												to='Apparat'
												spy={true}
												offset={-40}
												smooth={true}
												duration={300}
												activeClass={styles.active}
												href='/'
											>
												Мощный аппарат
											</Link>
										</li>
										<li>
											<Link
												to='Reviews'
												spy={true}
												offset={-40}
												smooth={true}
												duration={300}
												activeClass={styles.active}
												href='/'
											>
												Отзывы
											</Link>
										</li>
										<li>
											<Link
												to='Price'
												spy={true}
												offset={-40}
												smooth={true}
												duration={300}
												activeClass={styles.active}
												href='/'
											>
												Абонементы
											</Link>
										</li>
									</ul>
								</div>
							</Link>
						</li>
						<li>
							<Link
								to='Price'
								spy={true}
								offset={-40}
								smooth={true}
								duration={300}
								activeClass={styles.active}
								href='/'
							>
								Цены
							</Link>
						</li>
						<li>
							<Link
								to='Contacts'
								spy={true}
								offset={-40}
								smooth={true}
								duration={300}
								activeClass={styles.active}
								href='/'
							>
								Контакты
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.contacts}>
					<ul>
						<li>
							{' '}
							<a className='mgo-number' href='tel:+74951506977'>
								8 (495) 150-69-77
							</a>
						</li>
						<li>Ежедневно с 10 до 22</li>
					</ul>
				</div>
			</nav>
			<div className={styles.icon} onClick={() => setNav(!nav)}>
				{nav ? <HiOutlineX size={30} /> : <HiMenu size={30} />}
			</div>
			<div className={nav ? styles.popup : styles.none}>
				<ul>
					{menu.map(item => {
						return (
							<li key={item.id}>
								<Link
									key={item.id}
									to={item.toLink}
									spy={true}
									smooth={true}
									duration={300}
									activeClass={styles.active}
									href='/'
									onClick={() => setNav(!nav)}
								>
									{item.menuName}
								</Link>
							</li>
						)
					})}
					<li>
						{' '}
						<a className='mgo-number' href='tel:+74951506977'>
							<img
								src={phone}
								alt='телефон'
								width={22}
								height={22}
								style={{ marginRight: '10px' }}
							/>{' '}
							8 (495) 150-69-77
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MainMenu
