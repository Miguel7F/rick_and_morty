import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styles from '../styles/Detail.module.css'

export default function Detail() {
  const params = Number(useParams().id)
  const characters = useSelector(state => state.characters)
  //Esto retorna un array con un solo obj, por eso se hace doble destructuring
  const [{ name, status, species, gender, origin, image }] = characters.filter(char => char.id === params)

  return (
    <div>

      <h1 className={styles.titulo}>{name}</h1>
      <div className={styles.personajes} >
        <div className={styles.info}>
          <p>Status: {status}</p>
          <p>Specie: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin?.name}</p>
        </div>
        <div className={styles.imagen}>
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  )
}
