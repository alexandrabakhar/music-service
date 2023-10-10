import s from './Registration.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignUpMutation } from '../../redux/services/usersApi';
import { useEffect, useState } from 'react';
import { Logo } from '../../components/Logo/Logo';

export const Registration = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [signUp, { isSuccess, isError, error }] = useSignUpMutation();
    let [errorText, setErrorText] = useState('');

    const onFormSubmit = async (fields) => {
        setErrorText('');

        const EMAIL_REGEXP =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if (!EMAIL_REGEXP.test(fields.username)) {
            setErrorText('Неверный формат логина!');
            return;
        }

        if (fields.password !== fields.repeatPassword) {
            setErrorText('Пароли не совпадают.');
            return;
        }

        await signUp({
            username: fields.username,
            password: fields.password,
            email: fields.username,
        });
    };
    useEffect(() => {
        if (isError) {
            setErrorText(...Object.values(error.data));
        }
    }, [error]);

    if (isSuccess) navigate('/login');

    return (
        <div className={s.container}>
            <div className={s.block}>
                <form
                    onSubmit={handleSubmit(onFormSubmit)}
                    className={s['form-login']}
                    method="POST"
                >
                    <Logo type="auth" />
                    <input
                        placeholder="Логин"
                        type="text"
                        required
                        className={s.input}
                        {...register('username')}
                    />
                    <input
                        placeholder="Пароль"
                        type="password"
                        required
                        className={s.input}
                        {...register('password')}
                    />
                    <input
                        placeholder="Повторите пароль"
                        type="password"
                        required
                        className={s.input}
                        {...register('repeatPassword')}
                    />

                    <div className={s.info}>{errorText}</div>
                    <button type="submit" className={`${s['btn-signup-ent']}`}>
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};
