import React, { useState } from 'react'
import styles from './Login.module.css'
import login from './login.png';
import { useNavigate } from 'react-router-dom';
import validation from './validation.js'

export default function Login() {

    const navigate=useNavigate()
    const EMAIL = "ejemplo@soyejemplo.com"
    const PASSWORD = "Ejemplo1"

    let [access, setAccess] = useState(false)
    const [userData, setUserData] = useState({ bot: false})
    const [errors, setErrors] = useState({})

    function validateError(event) {
        if (event.target.name === "bot") {
            event.target.id === "noBot" ? setUserData({ ...userData, bot: true }) : setUserData({ ...userData, bot: false })
        } else {
            setUserData({ ...userData, [event.target.name]: event.target.value })
            const estado = validation({ [event.target.name]: event.target.value })
            setErrors({ ...errors, ...estado })
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (userData.password === PASSWORD && userData.email === EMAIL && userData.bot){
            setAccess(access=true)
            navigate("/home")
        }else{
            alert("El usuario o contraseña son incorrectos")
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.imgContainer}>
                    <img className='styles.image' src={login} alt="Login" />
                </div>
                <div className={styles.container}>
                    <div className={styles.etiqueta}>User:</div>
                    <input
                        type="text"
                        key='email'
                        name='email'
                        onBlur={validateError}
                        title='Características del email'
                        placeholder='Ingresa tu email' />
                </div>
                <div className={errors.email && errors.email === "Correcto" ? styles.ocultarDiv : styles.mostrarDiv}>{errors.email}</div>

                <div className={styles.container}>
                    <div className={styles.etiqueta}>Password: </div>
                    <input
                        type="password"
                        key="password"
                        name='password'
                        onBlur={validateError}
                        placeholder='Ingresa tu contraseña' />
                </div>
                <div className={errors.password && errors.password === "Correcto" ? styles.ocultarDiv : styles.mostrarDiv}>{errors.password}</div>

                <div className={styles.container}>
                    <input type="radio" key="noBotRadio" id='noBot' name='bot' onChange={validateError} />
                    <div className={styles.etiqueta} htmlFor='noBot'> No soy un BOT </div>

                    <input type="radio" key="siBotRadio" id='siBot' name='bot' onChange={validateError} defaultChecked />
                    <div className={styles.etiqueta} htmlFor='siBot'> Sí, soy un BOT </div>
                </div>
                <input
                    /*className={errors.bot?undefined:styles.ocultarDiv}*/ /*//! No se muestra el input*/
                    className={(userData.bot && errors?.email==="Correcto" &&errors?.password==="Correcto")? undefined : styles.disabledInput}
                    disabled={!(userData.bot && errors?.email==="Correcto" && errors?.password==="Correcto")}
                    type="submit"
                    key='submit'
                    value='Sign up'>
                </input>
            </form>
        </div>
    )
}
