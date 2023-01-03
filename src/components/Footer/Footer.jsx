import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-scroll'
import FooterLogo from '../../img/footerlogo.webp'
import insta from '../../img/insta.svg'
import whatsapp from '../../img/whatsapp.svg'

const Footer = () => {
	return (
		<footer>
			<div className={styles.container}>
				<div className={styles.footer__info}>
					<img src={FooterLogo} width={120} height={75} alt='футер лого' />
					<div className={styles.social}>
						<img src={insta} width={24} height={24} alt='инстаграмм' />
						<img src={whatsapp} width={24} height={24} alt='инстаграмм' />
					</div>
					<p>
						<a className='mgo-number' href='tel:+74951506977'>
							8 (495) 150-69-77
						</a>
						<a href='mailto: izumstudios@mail.ru'>izumstudios@mail.ru</a>
					</p>
				</div>
				<div className={styles.footer__nav}>
					<nav>
						<ul>
							<li>
								<Link
									activeClass={styles.active}
									href='/'
									to='Top'
									spy={true}
									smooth={true}
									duration={300}
								>
									Главная
								</Link>
							</li>
							<li>
								<Link
									activeClass={styles.active}
									href='/'
									to='About'
									spy={true}
									smooth={true}
									duration={300}
								>
									О сети #IZUM
								</Link>
							</li>
							<li>
								<Link
									activeClass={styles.active}
									href='/'
									to='Apparat'
									spy={true}
									smooth={true}
									duration={300}
								>
									Мощный аппарат
								</Link>
							</li>
							<li>
								<Link
									activeClass={styles.active}
									href='/'
									to='Masters'
									spy={true}
									smooth={true}
									duration={300}
								>
									Наши специалисты
								</Link>
							</li>
							<li>
								<Link
									activeClass={styles.active}
									href='/'
									to='Reviews'
									spy={true}
									smooth={true}
									duration={300}
								>
									Отзывы
								</Link>
							</li>
							<li>
								<Link
									activeClass={styles.active}
									href='/'
									to='Price'
									spy={true}
									smooth={true}
									duration={300}
								>
									Цены
								</Link>
							</li>
							<li>
								<Link
									activeClass={styles.active}
									href='/'
									to='Price'
									spy={true}
									smooth={true}
									duration={300}
								>
									Абонементы
								</Link>
							</li>
							<li>
								<Link
									activeClass={styles.active}
									href='/'
									to='Contacts'
									spy={true}
									smooth={true}
									duration={300}
								>
									Контакты
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className={styles.footer__title}>
					<h5>
						Вся представленная на сайте информация, касающаяся стоимости услуг,
						носит информационный характер и ни при каких условиях не является
						публичной офертой, определяемой положениями Статьи 437(2)
						Гражданского кодекса РФ.
					</h5>
				</div>
				<div className={styles.footer__politics}>
					<h5>
						Политика конфиденциальности
						<br />
						Все права защищены
					</h5>
				</div>
			</div>
		</footer>
	)
}

export default Footer
