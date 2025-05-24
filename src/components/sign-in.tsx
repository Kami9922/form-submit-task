import React from 'react'
import styled from 'styled-components'
import { Input } from './input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const signupSchema = yup.object({
	email: yup
		.string()
		.required('Обязательное поле')
		.email('Некорректный email')
		.max(100, 'Максимум 100 символов')
		.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Некорректный формат email'),
	password: yup
		.string()
		.required('Обязательное поле')
		.min(6, 'Минимум 6 символов')
		.max(50, 'Максимум 50 символов')
		.matches(
			/^[\w!@#$%^&*()\-+=~`[\]{}|:;"'<>,.?/]+$/,
			'Пароль содержит недопустимые символы'
		),
})
interface FormValues {
	email: string
	password: string
}
interface SigninContainerProps {
	className?: string
	onSubmit: SubmitHandler<FormValues>
}

const SigninContainer: React.FC<SigninContainerProps> = (props) => {
	const { className, onSubmit } = props

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormValues>({
		resolver: yupResolver(signupSchema),
	})
	return (
		<div className={className}>
			<h1>Вход</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label='Email'
					type='email'
					placeholder='Введите email'
					reg={{ ...register('email') }}
					error={errors.email?.message}
				/>
				<Input
					label='Password'
					type='password'
					placeholder='Введите пароль'
					reg={{ ...register('password') }}
					error={errors.password?.message}
				/>
				<button type='submit'>Войти</button>
			</form>
		</div>
	)
}

export const Signin = styled(SigninContainer)`
	border: 1px solid black;
	padding: 1rem;
	border-radius: 12px;
`
