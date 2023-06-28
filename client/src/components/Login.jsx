import React, {  useState } from 'react'
import styles from '../styles/Login.module.css'
import login from '../imagens/login.png'
import { useNavigate } from 'react-router-dom';
import { validation } from './functions'
import { EMAIL, PASSWORD, toAccess} from '../redux/action'
import { useDispatch } from 'react-redux';

export default function Login() {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    
    /*
    //? debería serviri para poder verificar si el usuario ya está logueado y mandarlo al home 
    const access = useSelector(state => state.access) 
    useEffect(()=>{
        access && navigate("/home")
    },[])
    */
    

    const [userData, setUserData] = useState({ bot: false })
    const [errors, setErrors] = useState({})

    function validateError(event) {
        const name = event.target.name
        const value = event.target.value
        switch (name) {
            case "bot":
                setUserData({ ...userData, bot: event.target.id === "noBot" })
                break;
            default:
                setUserData({ ...userData, [name]: value })
                const estado = validation({ [name]: value })
                setErrors({ ...errors, ...estado })
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (userData.password === PASSWORD && userData.email === EMAIL && userData.bot) {
            dispatch(toAccess(true))
            navigate("/home")
        } else {
            alert("El usuario o contraseña son incorrectos")
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.imgContainer}>
                    <img className={styles.image} src={login} alt="Login" />
                </div>
                <div className={styles.container}>
                    <label htmlFor='email'>User: </label>
                    <input
                        type="text"
                        key='email'
                        id='email'
                        name='email'
                        autoComplete='email'
                        onChange={validateError} /*Podemos aplicar onBlur en su lugar*/
                        placeholder='Ingresa tu email' />

                </div>
                <div className={errors.email && errors.email === "Correcto" ? styles.ocultarDiv : styles.mostrarDiv}>{errors.email}</div>

                <div className={styles.container}>
                    <label htmlFor='password'>Password: </label>
                    <input
                        type="password"
                        key="password"
                        id='password'
                        name='password'
                        onChange={validateError} /*Podemos aplicar onBlur en su lugar*/
                        placeholder='Ingresa tu contraseña' />
                </div>
                <div className={errors.password && errors.password === "Correcto" ? styles.ocultarDiv : styles.mostrarDiv}>{errors.password}</div>

                <div className={styles.container}>
                    <input type="radio" key="noBotRadio" id='noBot' name='bot' onChange={validateError} />
                    <label htmlFor='noBot'> No soy un BOT </label>

                    <input type="radio" key="siBotRadio" id='siBot' name='bot' onChange={validateError} defaultChecked />
                    <label htmlFor='siBot'> Sí, soy un BOT </label>
                </div>
                <input
                    /*className={(condicional)=styles.ocultarDiv}*/ /*//! No se muestra el input */
                    className={(userData.bot && errors?.email === "Correcto" && errors?.password === "Correcto") ? undefined : styles.disabledInput}
                    disabled={!(userData.bot && errors?.email === "Correcto" && errors?.password === "Correcto")}
                    type="submit"
                    key='submit'
                    value='Sign up'>
                </input>
            </form>
        </div>
    )
}
