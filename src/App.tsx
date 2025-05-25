import styled from 'styled-components'
import { Signup, Signin } from './components/index'

interface AppContainerProps {
	className?: string
}

const AppContainer: React.FC<AppContainerProps> = ({ className }) => {
	const onSubmit = (data: {}) => {
		console.log('Форма отправлена:', data)
	}
	return (
		<div className={className}>
			<Signup onSubmit={onSubmit} />
			<Signin onSubmit={onSubmit} />
		</div>
	)
}

export const App = styled(AppContainer)`
	display: flex;
	justify-content: center;
	gap: 100px;
	button {
		margin-top: 1rem;
	}
`
