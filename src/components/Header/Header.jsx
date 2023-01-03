import React, { useState } from 'react'
import styles from './Header.module.scss'
import modalVideo from '../../img/modal.mp4'
import youtube from '../../img/play.svg'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import ButtonForm from '../UI/ButtonForm/ButtonForm'
import ellipse from '../../img/ellipse.svg'

const styleTwo = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '94%',
	height: 'auto',
	boxShadow: 20,
}

const Header = () => {
	// second modal
	const [openTwoModal, setOpenTwoModal] = useState(false)
	const handleOpenTwoModal = () => setOpenTwoModal(true)
	const handleCloseTwoModal = () => setOpenTwoModal(false)
	// second modal

	return (
		<div className={styles.bg} id='Top'>
			<div className={styles.container}>
				<h1>
					Избавьтесь от лишних волос, пройдя курс{' '}
					<span> безопасной эпиляции на диодном аппарате </span>нового поколения
				</h1>
				<div className={styles.buttons}>
					<ButtonForm
						title='Записаться онлайн'
						link='https://b177562.yclients.com/select-city/2/select-branch?previousStepUrl=%2Fcompany%2F659154%2Fselect-services%3Fo%3D&o='
					/>
					<button onClick={handleOpenTwoModal} className={styles.secondary}>
						<img src={ellipse} alt='эллипс' className={styles.ellipse} />
						<img src={youtube} alt='Лого ютуба' width={70} height={70} />{' '}
						<p>
							Познакомиться с #IZUM <br />
							за 40 секунд
						</p>
					</button>
					<Modal
						aria-labelledby='transition-modal-title'
						aria-describedby='transition-modal-description'
						open={openTwoModal}
						onClose={handleCloseTwoModal}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={openTwoModal}>
							<Box sx={styleTwo}>
								<video width='100%' height='100%' controls autoPlay muted>
									<source src={modalVideo} type='video/mp4' />
									Your browser does not support the video tag.
								</video>
							</Box>
						</Fade>
					</Modal>
				</div>
			</div>
		</div>
	)
}

export default Header
