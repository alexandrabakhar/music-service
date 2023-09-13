import s from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    useGetTokenMutation,
    useLoginMutation,
    useTokenRefreshMutation,
} from '../../redux/services/usersApi';

import { useDispatch } from 'react-redux';
import {
    setAccess,
    setLogin,
    setLogout,
    setRefresh,
} from '../../redux/slices/user';
import { useEffect, useState } from 'react';
import { Logo } from '../../components/Logo/Logo';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [login, { isError: isErrorLogin }] = useLoginMutation();
    const [getToken] = useGetTokenMutation();
    const [tokenRefresh] = useTokenRefreshMutation();
    const dispatch = useDispatch();
    const [authError, setAuthError] = useState('');

    const getAccess = async (string) => {
        tokenRefresh({ refresh: string })
            .unwrap()
            .then((data) => {
                dispatch(setLogin({ id: localStorage.getItem('userID') }));
                dispatch(setRefresh({ refresh: string }));
                dispatch(setAccess({ access: data.access }));
                navigate('/');
            })
            .catch((e) => {
                setLogout();
                localStorage.clear();
                console.error(e.data.detail);
            });
    };

    useEffect(() => {
        const storageRefresh = localStorage.getItem('refresh');
        if (!storageRefresh) return;
        getAccess(storageRefresh);
    }, []);

    const onFormSubmit = async (fields) => {
        setAuthError('');
        try {
            const responseLogin = await login({ ...fields }).unwrap();

            dispatch(setLogin({ id: responseLogin.id }));
            localStorage.setItem('userID', responseLogin.id);

            const responseToken = await getToken({ ...fields });
            const tokenData = responseToken.data;
            dispatch(setRefresh({ refresh: tokenData.refresh }));
            dispatch(setAccess({ access: tokenData.access }));
            localStorage.setItem('refresh', tokenData.refresh);
            navigate('/');
        } catch (e) {
            console.error(e.data.detail);
            setAuthError(e.data.detail);
        }
    };

    const handleRegistrationButtonClick = () => {
        navigate('/registration');
    };

    return (
        <div className={s.container}>
            <div className={s.block}>
                <form
                    className={s['form-login']}
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <Logo />

                    <input
                        placeholder="Логин"
                        type="text"
                        required
                        className={s.input}
                        {...register('email')}
                    />
                    <input
                        placeholder="Пароль"
                        type="password"
                        required
                        className={s.input}
                        {...register('password')}
                    />
                    {isErrorLogin ? (
                        <p className={s.error}>{authError}</p>
                    ) : null}
                    <button
                        className={s['btn-enter']}
                        id="btnEnter"
                        type="submit"
                    >
                        Войти
                    </button>

                    <button
                        className={s['btn-signup']}
                        id="btnSignUp"
                        onClick={handleRegistrationButtonClick}
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};
