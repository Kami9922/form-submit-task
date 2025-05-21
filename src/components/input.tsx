import React from 'react'
import styled from 'styled-components'

interface InputContainerProps {
	className?: string
	size?: string
	radius?: string
	placeholder?: string
	label?: string
	description?: string
	error?: string
	variant?: string
}

const InputContainer: React.FC<InputContainerProps> = (props) => {
	const {
		className,
		placeholder,
		label,
		description,
		error,
		variant,
		size,
		radius,
		// asterisk,
	} = props
	return (
		<div className={className}>
			<div className='input-container'>
				<label>{label}</label>
				{description && <span>{description}</span>}
				<input placeholder={placeholder} />
				{error && <span>{error}</span>}
			</div>
		</div>
	)
}

export const Input = styled(InputContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: ${({ radius = '0px' }) => radius};
	.input-container {
		display: flex;
		flex-direction: column;
		align-items: start;
	}
	label {
		display: block;
	}
	label::after {
		content: ' *';
		color: red;
		font-weight: bold;
	}
	input {
		padding: 0.5rem;
		font-size: ${({ size = '14px' }) => size};
		margin-bottom: 0.5rem;
		width: 250px;
	}
	span {
		display: block;
		font-size: 14px;
		color: #929292;
		margin-bottom: 0.5rem;
	}
`
