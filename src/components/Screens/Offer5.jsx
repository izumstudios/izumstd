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
import HeaderOffer5 from '../HeaderOffer5/HeaderOffer5'
import MainMenu from '../MainMenu/MainMenu'
import Masters from '../Masters/Masters'
import Mission from '../Mission/Mission'
import Quiz from '../Quiz/Quiz'
import Reviews from '../Reviews/Reviews'
import SelectOffer5 from '../SelectOffer5/SelectOffer5'
//Беги из компании!!!
const Offer4 = () => {
	return (
		<div className={styles.body}>
			<MainMenu />
			<HeaderOffer5 />
			<SelectOffer5 />
			<BestStudio />
			<BenefitOne />
			<BenefitTwo />
			<BenefitThree />
			<BenefitFour />
			<BenefitFive />
			<Reviews />
			<Masters />
			<Mission />
			<Quiz />
			<Contacts />
			<Footer />
		</div>
	)
}

export default Offer4
