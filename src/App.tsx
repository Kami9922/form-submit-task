import './App.css'
import { Signin } from './components/sign-in'
import { Signup } from './components/sign-up'

const App = () => {
	return (
		<div className='App'>
			<Signin />
			<Signup />
		</div>
	)
}

export default App
