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
	asterisk?: string
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
		asterisk,
	} = props

	return (
		<div className={className}>
			<div className='input-container'>
				<label>{label}</label>
				{description && <span className='description-span'>{description}</span>}
				<input placeholder={placeholder || 'write something...'} />
				{error && <span className='error-span'>{error}</span>}
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

	span {
		font-size: ${({ size }) => {
			switch (size) {
				case 'xs':
					return '7px'
				case 'sm':
					return '9px'
				case 'md':
					return '11px'
				case 'lg':
					return '13px'
				case 'xl':
					return '15px'
			}
		}};
		display: block;
	}

	label {
		display: block;
		font-size: ${({ size }) => {
			switch (size) {
				case 'xs':
					return '12px'
				case 'sm':
					return '14px'
				case 'md':
					return '16px'
				case 'lg':
					return '20px'
				case 'xl':
					return '25px'
			}
		}};
	}

	.error-span {
		color: red;
	}

	${({ asterisk }) =>
		asterisk === 'true' &&
		`label::after{
		content: ' *';
		color: red;
		font-weight: bold;
		}`};

	input {
		border: ${({ variant, error }) => {
			if (error) {
				return '1px solid #ce1010'
			}
			if (variant === 'default') {
				return '1px solid #929292'
			}
			if (variant === 'unstyled' || 'filled') {
				return '0px'
			}
		}};

		background-color: ${({ variant }) => {
			if (variant === 'filled') {
				return '#e4e4e4'
			}
		}};

		padding: 0.5rem;
		font-size: ${({ size }) => {
			switch (size) {
				case 'xs':
					return '12px'
				case 'sm':
					return '14px'
				case 'md':
					return '16px'
				case 'lg':
					return '20px'
				case 'xl':
					return '25px'
			}
		}};
		margin-bottom: 0.2rem;
		height: ${({ size }) => {
			switch (size) {
				case 'xs':
					return '11px'
				case 'sm':
					return '15px'
				case 'md':
					return '20px'
				case 'lg':
					return '25px'
				case 'xl':
					return '30px'
			}
		}};
		width: 250px;
	}

	.description-span {
		color: #929292;
		margin-bottom: 0.5rem;
	}
`
