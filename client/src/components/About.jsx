import { useSelector } from 'react-redux'
import logHenry from '../imagens/Logo Henry.png'
import styles from '../styles/About.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function About() {
  const navigate=useNavigate()
  const access = useSelector(state => state.access)

    useEffect(() => {
        !access && navigate("/")
    }, [])

  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <p>Mi nombre es Luis Falcón. Natural de Perú. Siempre me atrajo la programación y estoy en proceso de lograr esa meta.</p>
        <p>Este proyecto se establece como una integración de todos los conocimientos adquiridos en Henry en los módulos 1 y 2 de la carrera Full Stack Developer</p>
        <p>Para este proyecto se están aplicando las tecnologías de JS, REACT, REDUX.</p>
        <p>La API consumida para este proyecto se encuentra en <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">Rick and Morty API</a></p>
      </div>

      <div className={styles.containerImg}>
        <a href="https://www.soyhenry.com/" target="_blank" rel="noreferrer">
          <img src={logHenry} alt="Logo de Henry" />
        </a>
      </div>
    </div>

  )
}
