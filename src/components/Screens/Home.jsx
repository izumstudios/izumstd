import React from 'react'
import styles from '../../scss/app.scss'
import BenefitFive from '../BenefitFive/BenefitFive'
import BenefitFour from '../BenefitFour/BenefitFour'
import BenefitOne from '../BenefitOne/BenefitOne'
import BenefitThree from '../BenefitThree/BenefitThree'
import BenefitTwo from '../BenefitTwo/BenefitTwo'
import BestStudio from '../BestStudio/BestStudio'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MainMenu from '../MainMenu/MainMenu'
import Masters from '../Masters/Masters'
import Mission from '../Mission/Mission'
import Quiz from '../Quiz/Quiz'
import Reviews from '../Reviews/Reviews'
import Select from '../Select/Select'

//Беги из компании!!!

const Home = () => {
	return (
		<div className={styles.body}>
			<MainMenu />
			<Header />
			<BestStudio />
			<BenefitOne />
			<BenefitTwo />
			<BenefitThree />
			<BenefitFour />
			<BenefitFive />
			<Select />
			<Reviews />
			<Masters />
			<Mission />
			<Quiz />
			<Contacts />
			<Footer />
		</div>
	)
}

export default Home
