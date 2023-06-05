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
import { setLogin, setLogout } from '../../store/slices/user';
import { useEffect } from 'react';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [login, { isLoading: isLoadingLogin, isError: isErrorLogin }] =
        useLoginMutation();
    const [getToken, { isError: isErrorGetToken }] = useGetTokenMutation();
    const [tokenRefresh, { isErrorTokenRefresh }] = useTokenRefreshMutation();
    const dispatch = useDispatch();

    const getAccessToken = async (string) => {
        const responseRefresh = await tokenRefresh({ refresh: string });
        dispatch(
            setLogin({
                id: localStorage.getItem('userID'),
                token: {
                    access: responseRefresh.data.access,
                    refresh: string,
                },
            })
        );
        navigate('/');
    };

    useEffect(() => {
        const storageRefresh = localStorage.getItem('refresh');
        if (!storageRefresh) return;
        getAccessToken(storageRefresh);
    }, []);

    const onFormSubmit = async (fields) => {
        const responseLogin = await login({ ...fields });

        const loginData = responseLogin.data;

        const responseToken = await getToken({ ...fields });
        const tokenData = responseToken.data;

        dispatch(setLogin({ ...loginData, token: tokenData }));

        localStorage.setItem('userID', loginData.id);
        localStorage.setItem('refresh', tokenData.refresh);
        navigate('/');
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
                    <button
                        className={s['btn-enter']}
                        id="btnEnter"
                        type="submit"
                    >
                        Войти
                        {/* <NavLink to="/">Войти</NavLink> */}
                    </button>

                    <button
                        className={s['btn-signup']}
                        id="btnSignUp"
                        onClick={handleRegistrationButtonClick}
                    >
                        Зарегистрироваться
                        {/* <NavLink to="/registration">Зарегистрироваться</NavLink> */}
                    </button>
                </form>
            </div>
        </div>
    );
};
