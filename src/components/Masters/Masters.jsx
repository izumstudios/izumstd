import React from 'react'
import styles from './Masters.module.scss'
import ButtonForm from '../UI/ButtonFormOffer/ButtonFormOffer'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Slider from 'react-slick'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const masters = [
	{
		id: 1,
		image: require('../../img/masters/car1.webp'),
		alt: 'master1',
		nameMaster: 'Соловьева Анастасия',
		location: 'м. Таганская',
		description:
			'Закончила с отличием Московский Медицинский колледж #5 по специальности сестринское дело. Прошла профессиональную переподготовку в учебном центре «Орхидея» по программе Косметология. Дополнительно проходила курсы и получала сертификаты на работе с лазерами.',
	},
	{
		id: 2,
		image: require('../../img/masters/car2.webp'),
		alt: 'master2',
		nameMaster: 'Супрунова Аксинья',
		location: 'м. Павелецкая',
		description:
			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре! К работе подхожу ответственно, к каждой девушке ищу индивидуальный подход для создания приятной деликатной атмосферы.',
	},
	{
		id: 3,
		image: require('../../img/masters/car3.webp'),
		alt: 'master3',
		nameMaster: 'Антоненко Екатерина',
		location: 'м. Новослободская',
		description:
			'Добрая и позитивная, имеет опыт работы на диодных и гибридных лазерах, знает всё о вашей коже и волосах, идеально подберет настройки под Вас, чтобы процедура была эффективна и безболезненна. Может поговорить на любую тему, начиная с сериалов заканчивая политикой. Любит домашних питомцев. Сделает Ваш день ярким и насыщенным!',
	},
	{
		id: 4,
		image: require('../../img/masters/car4.webp'),
		alt: 'master4',
		nameMaster: 'Ярахмедова Мадина',
		location: 'м. Павелецкая',
		description:
			'Косметолог-эстетист, специалист лазерной эпиляции. Окончила Московский медицинский колледж по специальности «Лечебное дело», фельдшер скорой и неотложной помощи. Освоила программу базовой подготовки «Эстетическая косметология». Опыт в аппаратной косметологии более 5 лет.',
	},
	{
		id: 5,
		image: require('../../img/masters/car5.webp'),
		alt: 'master5',
		nameMaster: 'Нуманхонова Регина',
		location: 'м. Новослободская',
		description:
			'Работает в аппаратной косметологии более 7 лет. Называет себя перфекционистом и аккуратистом, поэтому доводит работу до идеального результата. Ее цель - стерильность, качество и быстрый результат. Работает на высоких мощностях, процедура проходит максимально быстро и под лёгкие беседы.',
	},
]
function SampleNextArrow(props) {
	const { className, onClick } = props
	return (
		<div className={className} onClick={onClick}>
			<BiChevronRight style={{ color: '#722b4f', fontSize: '30px' }} />
		</div>
	)
}

function SamplePrevArrow(props) {
	const { className, onClick } = props
	return (
		<div className={className} onClick={onClick} style={{ left: '-38px' }}>
			<BiChevronLeft style={{ color: '#722b4f', fontSize: '30px' }} />
		</div>
	)
}

const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 0,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	responsive: [
		{
			breakpoint: 1336,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},

		{
			breakpoint: 916,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}

const Masters = () => {
	return (
		<div className={styles.cardGroup} id='Masters'>
			<h2>Косметологи с медицинским образованием и опытом более 3-х лет</h2>
			<div className={styles.masters}>
				<Slider {...settings}>
					{masters.map(master => {
						return (
							<Card sx={{ maxWidth: 345 }} key={master.id}>
								<CardMedia
									component='img'
									height='80%'
									image={master.image}
									alt={master.alt}
								/>
								<CardContent>
									<Typography gutterBottom variant='h5'>
										{master.nameMaster}
									</Typography>
									<Typography gutterBottom variant='subtitle2'>
										{master.location}
									</Typography>
									<Typography variant='body1' color='text.secondary'>
										{master.description}
									</Typography>
								</CardContent>
							</Card>
						)
					})}
				</Slider>
			</div>
			<ButtonForm
				title='Выбрать мастера'
				link='https://b177562.yclients.com/select-city/2/select-branch?previousStepUrl=%2Fcompany%2F659154%2Fselect-services%3Fo%3D&o='
			/>
		</div>
	)
}

export default Masters
