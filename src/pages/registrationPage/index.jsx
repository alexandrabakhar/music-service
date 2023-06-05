// import { Container } from '../../components/Container';

// export const RegistrationPage = () => {
//     return <Container modalType="signup" />;
// };

// import logo from '../../assets/images/logo-black.png';
import logo from '../../assets/img/logo_modal.png';
import s from './registration.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignUpMutation } from '../../services/usersApi';
import { useState } from 'react';

export const RegistrationPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [signUp, { isSuccess, isError, error }] = useSignUpMutation();
    let [errorText, setErrorText] = useState('');
    // console.dir(register);

    const onFormSubmit = async (fields) => {
        setErrorText('');
        if (fields.password !== fields.repeatPassword) {
            setErrorText('Пароль не совпадает.');
            return;
        }


        await signUp({
            username: fields.username,
            password: fields.password,
            email: fields.username,
        });
    };
    console.dir(handleSubmit);
    console.log(isError);
    console.log(error);
    if (isSuccess) navigate('/login');

    return (
        <div className={s.container}>
            <div className={s.block}>
                <form
                    // onSubmit={(e) => e.preventDefault()}
                    onSubmit={handleSubmit(onFormSubmit)}
                    className={s['form-login']}
                    method="POST"
                >
                    <img src={logo} className={s.logo} alt="logo" />

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

                    <div className={s.info}>
                        {errorText}
                        {/* {isError && <div>Ошибка данных формы.</div>} */}
                    </div>
                    <button type="submit" className={`${s['btn-signup-ent']}`}>
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
