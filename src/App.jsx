import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Screens/Home'
import Offer1 from './components/Screens/Offer1'
import Offer2 from './components/Screens/Offer2'
import Offer3 from './components/Screens/Offer3'
import Offer4 from './components/Screens/Offer4'
import Offer5 from './components/Screens/Offer5'
import Offer6 from './components/Screens/Offer6'

function App() {
	return (
		<Router>
			<Routes>
				<Route id='home' exact path='/' element={<Home />} />
				<Route id='1' path='/001' element={<Offer1 />} />
				<Route id='2' path='/002' element={<Offer2 />} />
				<Route id='3' path='/003' element={<Offer3 />} />
				<Route id='4' path='/004' element={<Offer4 />} />
				<Route id='5' path='/005' element={<Offer5 />} />
				<Route id='6' path='/006' element={<Offer6 />} />
				<Route id='7' path='/007' element={<Offer6 />} />
				<Route id='8' path='/008' element={<Offer6 />} />
				<Route id='9' path='/009' element={<Offer6 />} />
			</Routes>
		</Router>
	)
}

export default App
