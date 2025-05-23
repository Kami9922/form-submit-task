import styled from 'styled-components'
import { Signup } from './components/sign-up'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const signupSchema = yup.object({
	name: yup
		.string()
		.required('Обязательное поле')
		.min(2, 'Минимум 2 символа')
		.max(50, 'Максимум 50 символов')
		.matches(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/, 'Только буквы, пробелы и дефисы'),

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

interface AppContainerProps {
	className?: string
}

type FormValues = yup.InferType<typeof signupSchema>

const AppContainer: React.FC<AppContainerProps> = ({ className }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormValues>({
		resolver: yupResolver(signupSchema),
	})
	const onSubmit = (data: FormValues) => {
		console.log('Форма отправлена:', data)
	}
	return (
		<div className={className}>
			<Signup
				register={register}
				errors={errors}
				onSubmit={handleSubmit(onSubmit)}
			/>
		</div>
	)
}

export const App = styled(AppContainer)`
	display: flex;
	justify-content: center;
`
