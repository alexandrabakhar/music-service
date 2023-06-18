import logo from '../../assets/img/logo_modal.png';
import s from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import {
    useGetTokenMutation,
    useLoginMutation,
    useTokenRefreshMutation,
} from '../../services/usersApi';

import { useDispatch } from 'react-redux';
import {
    setAccess,
    setLogin,
    setLogout,
    setRefresh,
} from '../../store/slices/user';
import { useEffect, useState } from 'react';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [login, { isError: isErrorLogin }] = useLoginMutation();
    const [getToken, { isError: isErrorGetToken }] = useGetTokenMutation();
    const [tokenRefresh] = useTokenRefreshMutation();
    const dispatch = useDispatch();
    const [authError, setAuthError] = useState('');
    console.log(isErrorLogin);

    const getAccess = async (string) => {
        // const responseRefresh = await tokenRefresh({ refresh: string });
        // console.log(responseRefresh);
        // dispatch(
        //     setLogin({
        //         id: localStorage.getItem('userID'),
        //         token: {
        //             access: responseRefresh.data.access,
        //             refresh: string,
        //         },
        //     })
        // );
        // navigate('/');
        // tokenRefresh({ refresh: string })
        // .unwrap()
        // .then((data) => {
        //   dispatch(
        //     setLogin({
        //       id: localStorage.getItem('userID'),
        //       token: {
        //         access: data.access,
        //         refresh: string,
        //       },
        //     })
        //   )
        //   navigate('/')
        // })
        // .catch((e) => {
        //   setLogout()
        //   localStorage.clear()
        //   console.error(e.data.detail)
        // })
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
                    <img src={logo} className={s.logo} alt="logo" />

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
