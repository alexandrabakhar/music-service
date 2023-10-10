import S from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    useGetAccessByRefreshMutation,
    useGetTokenMutation,
    useLoginMutation,
} from '../../redux/services/usersApi';

import { useDispatch } from 'react-redux';
import { setAccess, setLogin, setLogout } from '../../redux/slices/user';
import { useEffect, useState } from 'react';
import { Logo } from '../../components/Logo/Logo';

export const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [login, { isError: isErrorLogin }] = useLoginMutation();
    const [getToken] = useGetTokenMutation();
    const [getAccessByRefresh] = useGetAccessByRefreshMutation();

    const dispatch = useDispatch();
    const [authError, setAuthError] = useState('');

    const getAccess = async (string) => {
        getAccessByRefresh({ refresh: string })
            .unwrap()
            .then((data) => {
                dispatch(setLogin({ userID: +localStorage.getItem('userID') }));
                dispatch(setAccess({ access: data.access }));

                navigate('/');
            })
            .catch((e) => {
                setLogout();
                localStorage.clear();
                console.error(e);
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

            dispatch(setLogin({ userID: responseLogin.id }));
            localStorage.setItem('userID', responseLogin.id);

            const responseToken = await getToken({ ...fields });
            const tokenData = responseToken.data;

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
        <div className={S.container}>
            <div className={S.block}>
                <form
                    className={S['form-login']}
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <Logo />

                    <input
                        placeholder="Логин"
                        type="text"
                        required
                        className={S.input}
                        {...register('email')}
                    />
                    <input
                        placeholder="Пароль"
                        type="password"
                        required
                        className={S.input}
                        {...register('password')}
                    />
                    {isErrorLogin ? (
                        <p className={S.error}>{authError}</p>
                    ) : null}
                    <button
                        className={S['btn-enter']}
                        id="btnEnter"
                        type="submit"
                    >
                        Войти
                    </button>

                    <button
                        className={S['btn-signup']}
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
