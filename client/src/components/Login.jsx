import React, { useEffect, useState } from 'react'
import styles from '../styles/Login.module.css'
import login from '../imagens/login.png'
import { useNavigate } from 'react-router-dom';
import { validation } from '../funciones/functions'
import { toAccess } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

export default function Login() {
    //? Declaración de hooks.
    const navigate = useNavigate() //Para el redireccionamiento
    const dispatch = useDispatch() //Para despachar acciones al StateGlobal
    const access = useSelector(state => state.access) //Para suscribirnos a la propiedad "Access" del estado global
    const [userData, setUserData] = useState({})//Para tomar los valores de los imputs del formulario.
    const [errors, setErrors] = useState({})// Para hacer validaciones de los inputs de los formularios y hacer validaciones.
    const [bot, setBot] = useState(false)// Para tomar el estado de la validación de bot en el formulario.

    //? Se almacenan los valores ingresados en el formulario.
    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        //Se toman los valores ingresados en los inputs y se almacenan.
        setUserData({ ...userData, [name]: value })

        //Validación de datos incorrectos en form, se setea el error y se muestra un <p> con el mensaje correspondiente.
        const estado = validation({ [name]: value })
        setErrors({ ...errors, ...estado })
    }

    //?Se guarda el valor actual de los checkbox del formulario.
    function handleBot(event) {
        setBot(event.target.id === "noBot")
    }

    //? Aquí uso la llamada al server desde el componente y despacho la respuesta al state global de React-Redux, para que otros componentes puedan validar la data de logueo.
    async function handleSubmit(event) {
        event.preventDefault()

        await axios.post('http://localhost:3001/rickandmorty/login', userData)
            .then(({ data }) => {
                dispatch(toAccess(data.access))
                navigate('/home')
            })
            .catch((error) => {
                alert(error.response ? error.response.data : error.message);
            })
    }

    //? Al montar el componente se valida si el usuario ya se encuentra logueado para hacer la redirección automática a "Home"
    useEffect(() => {
        access && navigate("/home")
    }, [access])

    return (
        <div className={access ? styles.ocultarDiv : styles.container}>
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
                        onChange={handleChange} /*Podemos aplicar onBlur en su lugar*/
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
                        onChange={handleChange} /*Podemos aplicar onBlur en su lugar*/
                        placeholder='Ingresa tu contraseña' />
                </div>
                <div className={errors.password && errors.password === "Correcto" ? styles.ocultarDiv : styles.mostrarDiv}>{errors.password}</div>

                <div className={styles.container}>
                    <label htmlFor='noBot'>
                        <input type="radio" key="noBotRadio" id='noBot' name='bot' onChange={handleBot} />
                        No soy un BOT </label>

                    <label htmlFor='siBot'>
                        <input type="radio" key="siBotRadio" id='siBot' name='bot' onChange={handleBot} defaultChecked />
                        Sí, soy un BOT </label>
                </div>
                <input
                    /*className={(condicional)=styles.ocultarDiv}*/ /*//! No se muestra el input */
                    className={(bot && errors?.email === "Correcto" && errors?.password === "Correcto") ? styles.enabledInput : styles.disabledInput}
                    disabled={!(bot && errors?.email === "Correcto" && errors?.password === "Correcto")}
                    type="submit"
                    key='submit'
                    value='Sign up'>
                </input>
            </form>
        </div>
    )
}
