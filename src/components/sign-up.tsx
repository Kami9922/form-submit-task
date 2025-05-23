import React from 'react'
import styled from 'styled-components'
import { Input } from './input'
import { UseFormRegister, FieldErrors } from 'react-hook-form'

interface FormValues {
	name: string
	nickname: string
	email: string
	gender: string
	password: string
	confirmPassword: string
}

interface SignupProps {
	className?: string
	register: UseFormRegister<FormValues>
	errors: FieldErrors<FormValues>
	onSubmit: React.FormEventHandler<HTMLFormElement>
}

const SignupContainer: React.FC<SignupProps> = ({
	className,
	register,
	errors,
	onSubmit,
}) => {
	return (
		<div className={className}>
			<form onSubmit={onSubmit}>
				<Input
					label='Имя'
					type='text'
					placeholder='Введите имя'
					reg={{ ...register('name') }}
					error={errors.name?.message}
				/>
				<Input
					label='Ник'
					type='text'
					placeholder='Введите ник'
					reg={{ ...register('nickname') }}
					error={errors.nickname?.message}
				/>
				<Input
					label='Почта'
					type='email'
					placeholder='Введите почту'
					reg={{ ...register('email') }}
					error={errors.email?.message}
				/>
				<div className='gender-div'>
					<span className='gender-span'>Пол</span>
					<Input
						className='gender-input'
						label='Мужчина:'
						type='radio'
						value='male'
						reg={{ ...register('gender') }}
					/>
					<Input
						className='gender-input'
						label='Женщина:'
						type='radio'
						value='female'
						{...register('gender')}
					/>
					{errors.gender && (
						<span className='error'>{errors.gender.message}</span>
					)}
				</div>
				<Input
					label='Пароль'
					type='password'
					placeholder='Введите пароль'
					reg={{ ...register('password') }}
					error={errors.password?.message}
				/>
				<Input
					label='Подтвердите пароль'
					type='password'
					placeholder='Подтвердите пароль'
					reg={{ ...register('confirmPassword') }}
					error={errors.confirmPassword?.message}
				/>
				<button type='submit'>Зарегистрироваться</button>
			</form>
		</div>
	)
}

export const Signup = styled(SignupContainer)`
	.gender-div {
		display: flex;
		align-items: start;
		flex-direction: column;
		margin-bottom: 0.2rem;
	}

	.gender-span {
		margin-bottom: 0.5rem;
	}

	.gender-input {
		flex-direction: row;
		width: 100px;
	}
	button {
		margin-top: 0.5rem;
	}
`
