import React from 'react'
import styled from 'styled-components'
import { Input } from './input'

interface SigninContainerProps {
	className?: string
}

const SigninContainer: React.FC<SigninContainerProps> = ({ className }) => (
	<div className={className}>
		<div>
			<form onSubmit={() => {}}>
				<Input
					label='Input'
					size=''
					description='description'
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	</div>
)

export const Signin = styled(SigninContainer)``
