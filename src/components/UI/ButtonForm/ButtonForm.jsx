import React, { useState } from 'react'
import styles from './ButtonForm.module.scss'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'

const ButtonForm = ({ title, link }) => {
	const [number, setNumber] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		const data = {
			Phone: number,
		}
		axios
			.post(
				'https://sheet.best/api/sheets/dac96547-7a12-4751-855b-4bfb9d21faa9',
				data
			)
			.then(response => {
				setNumber('')
			})
	}
	// first modal
	const [openOneModal, setOpenOneModal] = useState(false)
	const handleOneOpen = () => setOpenOneModal(true)
	const handleOneClose = () => setOpenOneModal(false)
	// first modal

	// third modal
	const [openThirdModal, setOpenThirdModal] = useState(false)
	const handleOpenThirdModal = () => setOpenThirdModal(true)
	const handleCloseThirdModal = () => setOpenThirdModal(false)
	// third modal

	return (
		<div className={styles.btn}>
			<button
				onClick={handleOneOpen}
				style={{ padding: '15px' }}
				className={styles.primary}
			>
				{title}
			</button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={openOneModal}
				onClose={handleOneClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openOneModal}>
					<Box className={styles.second__modal}>
						<Typography
							id='transition-modal-description'
							sx={{ mt: 2 }}
							variant='h4'
							color='#000000'
							component='h2'
						>
							<form onSubmit={handleSubmit} className={styles.form}>
								<label type='phone' className={styles.label}>
									Введите Ваш номер телефона
								</label>
								<div className={styles.form__action}>
									<PhoneInput
										containerStyle={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
										inputStyle={{
											padding: '10px',
											width: '170px',
										}}
										buttonStyle={{
											display: 'none',
										}}
										disableDropdown={true}
										country={'ru'}
										value={number}
										onChange={number => setNumber(number)}
										inputProps={{
											name: 'phone',
											required: true,
											autoFocus: true,
										}}
									/>
									<button
										type='submit'
										onClick={handleOpenThirdModal}
										className={styles.primary}
									>
										Отправить
									</button>
								</div>
							</form>
							<Modal
								aria-labelledby='transition-modal-title'
								aria-describedby='transition-modal-description'
								open={openThirdModal}
								onClose={handleCloseThirdModal}
								closeAfterTransition
								BackdropComponent={Backdrop}
								BackdropProps={{
									timeout: 500,
								}}
							>
								<Fade in={openThirdModal}>
									<Box className={styles.third__modal}>
										<h2>Спасибо!</h2> <br />
										<h3>
											Запишитесь онлайн и получайте <br /> кэшбэк 10% с каждой
											процедуры
										</h3>
										<a href={link} target='_blank' rel='noreferrer'>
											<button className={styles.primary}>Записаться</button>
										</a>
									</Box>
								</Fade>
							</Modal>
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	)
}

export default ButtonForm
