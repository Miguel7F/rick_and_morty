import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Cards from './Cards'
import styles from '../styles/Favorites.module.css'
import { arrFav } from '../redux/action'
import axios from "axios"

export default function Favorites() {
  const dispatch = useDispatch()
  const sortFilFavorites = useSelector(state => state.sortFilFavorites)
  const favorites = useSelector(state => state.favorites)

  const [modify, setModify] = useState({
    gender: "sinFiltros",
    direction: "A",
  })

  async function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    switch (name) {
      case "gender":
        await axios.post(`http://localhost:3001/rickandmorty/character/favorites`, { gender: value, direction: modify.direction })
          .then(({ data }) => {
            dispatch(arrFav(data))
          })
          .catch(({ response }) => {
            alert(response.data)
          })
        break;
      case "direction":
        await axios.post(`http://localhost:3001/rickandmorty/character/favorites`, { gender: modify.gender, direction: value })
          .then(({ data }) => {
            dispatch(arrFav(data))
          })
          .catch(({ response }) => {
            alert(response.data)
          })
        break;
      default: break;
    }
    //? Se envía a actualizar los datos para el renderizado
    setModify({ ...modify, [name]: value })
  }

  async function iniciar() {
    await axios.post(`http://localhost:3001/rickandmorty/character/favorites`, { gender: modify.gender, direction: modify.direction })
      .then(({ data }) => {
        dispatch(arrFav(data))
      })
      .catch(({ response }) => {
        alert(response.data)
      })
  }


  useEffect(() => {
    //? Cuando se actualiza el array de favorites se actualiza la página
    iniciar()
  }, [favorites])

  useEffect(() => {
    //? Para cargar favoritos al iniciar. El uso de la dependencia vacía es estríctamente necesaria para evitar la renderización infinita.
    iniciar()
  }, [])


  return (
    <div>
      <div className={styles.containerFiltro}>
        <div>
          <span>Gender: </span>
          <input type="radio" name='gender' onChange={handleChange} value='sinFiltros' id='sinFiltros' defaultChecked /><label htmlFor='sinFiltros'>👨‍👩‍👧‍👦</label>
          <input type="radio" name='gender' onChange={handleChange} value='Female' id='Female' /><label htmlFor='Female'>👩</label>
          <input type="radio" name='gender' onChange={handleChange} value='Male' id='Male' /><label htmlFor='Male'>👨</label>
          <input type="radio" name='gender' onChange={handleChange} value='Genderless' id='Genderless' /><label htmlFor='Genderless'>🤖</label>
          <input type="radio" name='gender' onChange={handleChange} value='unknown' id='unknown' /><label htmlFor='unknown'>❓</label>
        </div>
        <div>
          <select name='direction' onChange={handleChange}>
            <option value="A">Orden Ascendente ⬆</option>
            <option value="D">Orden descendente ⬇</option>
          </select>
        </div>
      </div>
      <Cards characters={sortFilFavorites} />
    </div>
  )
}
