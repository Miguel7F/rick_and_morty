import React from 'react'
import styles from './Login.module.css'
import login from './login.png';

export default function Login() {



    function handleChange(event) {

    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.imgContainer}><img className='styles.image' src={login} alt="Inicio" /></div>
                <div className={styles.container}> <div className={styles.etiqueta}>User:</div>
                    <input type="text" key='user' name='user' value='' onChange={handleChange} placeholder='Ingresa tu usuario'></input>
                </div>
                <div className={styles.container}> <div className={styles.etiqueta}>Password: </div>
                    <input type="password" key="password" value='' name='password' onChange={handleChange} placeholder='Ingresa tu contraseña'></input>
                </div>
                <div className={styles.container}>
                    <input type="radio" key="noBotRadio" id='noBot' name='bot' /><div className={styles.etiqueta} htmlFor='noBot'> No soy un BOT </div>
                    <input type="radio" key="siBotRadio" id='siBot' name='bot' defaultChecked /><div className={styles.etiqueta} htmlFor='siBot'> Sí soy un BOT </div>
                </div>
                <input type="submit" key='submit' value='Sign up'></input>
            </form>
        </div>
    )
}
