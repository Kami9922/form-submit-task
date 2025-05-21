import React from 'react'
import styled from 'styled-components'

interface SignupContainerProps {
	className?: string
}

const SignupContainer: React.FC<SignupContainerProps> = ({ className }) => (
	<div className={className}>
		<div></div>
	</div>
)

export const Signup = styled(SignupContainer)``
