import React, { useState } from 'react'
import styles from './Login.module.css'
import login from './login.png';
import { Link } from 'react-router-dom';
import validation from './validation.js'

export default function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        bot: false,
    })

    const [errors, setErrors] = useState({})

    function handleChange(event) {
        if (event.target.id !== "siBot") {
            setUserData({ ...userData, [event.target.name]: event.target.value })
        } else { setUserData({ ...userData, [event.target.name]: false }) }
    }

//? quitar la validación de userData, trabajar solo con la validación de setError con evento ONBLUR

    function validateError(event) {
        {/* //! corregir el mensaje cuando salgamos del cajón colocando correctamente los datos */ }
        const {email,password}=validation({ ...errors, [event.target.name]: event.target.value })
        setErrors({...errors,email:email,password:password})
    }


    function handleSubmit() {

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
                        value={userData.email}
                        onChange={handleChange}
                        onBlur={validateError}
                        placeholder='Ingresa tu email' />
                </div>

                {/* //! corregir la visibilidad del div para cuando no haya error */ }
                <div className={styles.mostrarDiv}>{errors.email}</div>

                <div className={styles.container}>
                    <div className={styles.etiqueta}>Password: </div>
                    <input
                        type="password"
                        key="password"
                        value={userData.password}
                        name='password'
                        onChange={handleChange}
                        onBlur={validateError}
                        placeholder='Ingresa tu contraseña' />
                </div>

                {/* //! corregir la visibilidad del div para cuando no haya error */ }
                <div className={styles.mostrarDiv}>{errors.password}</div>
            
                <div className={styles.container}>
                    <input type="radio" key="noBotRadio" id='noBot' name='bot' onChange={handleChange} />
                    <div className={styles.etiqueta} htmlFor='noBot'> No soy un BOT </div>
                    <input type="radio" key="siBotRadio" id='siBot' name='bot' onChange={handleChange} defaultChecked />
                    <div className={styles.etiqueta} htmlFor='siBot'> Sí, soy un BOT </div>
                </div>
                <Link to="/home">
                    <input disabled={!userData.bot} type="submit" key='submit' value='Sign up'></input>
                </Link>

            </form>
        </div>
    )
}
