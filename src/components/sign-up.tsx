import React from 'react'
import styled from 'styled-components'
import { Input } from './input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const signupSchema = yup.object({
	name: yup
		.string()
		.required('Обязательное поле')
		.min(2, 'Минимум 2 символа')
		.max(50, 'Максимум 50 символов')
		.matches(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, 'Только буквы, пробелы и дефисы'),

	nickname: yup
		.string()
		.required('Обязательное поле')
		.min(3, 'Минимум 3 символа')
		.max(20, 'Максимум 20 символов')
		.matches(
			/^[a-zA-Z0-9_]+$/,
			'Только латинские буквы, цифры и подчёркивание'
		),

	email: yup
		.string()
		.required('Обязательное поле')
		.email('Некорректный email')
		.max(100, 'Максимум 100 символов')
		.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Некорректный формат email'),

	gender: yup
		.string()
		.required('Выберите пол')
		.oneOf(['male', 'female'], 'Некорректное значение'),

	password: yup
		.string()
		.required('Обязательное поле')
		.min(6, 'Минимум 6 символов')
		.max(50, 'Максимум 50 символов')
		.matches(
			/^[\w!@#$%^&*()\-+=~`[\]{}|:;"'<>,.?/]+$/,
			'Пароль содержит недопустимые символы'
		),

	confirmPassword: yup
		.string()
		.required('Подтвердите пароль')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
})

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
	onSubmit: SubmitHandler<FormValues>
}

const SignupContainer: React.FC<SignupProps> = ({ className, onSubmit }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormValues>({
		resolver: yupResolver(signupSchema),
	})

	return (
		<div className={className}>
			<h1>Регистрация</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label='Имя'
					type='text'
					placeholder='Введите имя'
					reg={{ ...register('name') }}
					error={errors.name?.message}
					asterisk='true'
				/>
				<Input
					label='Ник'
					type='text'
					placeholder='Введите ник'
					reg={{ ...register('nickname') }}
					error={errors.nickname?.message}
					asterisk='true'
				/>
				<Input
					label='Почта'
					type='email'
					placeholder='Введите почту'
					reg={{ ...register('email') }}
					error={errors.email?.message}
					asterisk='true'
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
						reg={{ ...register('gender') }}
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
					asterisk='true'
				/>
				<Input
					label='Подтвердите пароль'
					type='password'
					placeholder='Подтвердите пароль'
					reg={{ ...register('confirmPassword') }}
					error={errors.confirmPassword?.message}
					asterisk='true'
				/>
				<button type='submit'>Зарегистрироваться</button>
			</form>
		</div>
	)
}

export const Signup = styled(SignupContainer)`
	border: 1px solid black;
	padding: 1rem;
	border-radius: 12px;
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
`
