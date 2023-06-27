import { useDispatch, useSelector } from 'react-redux'
import Cards from './Cards'
import styles from '../styles/Favorites.module.css'
import { useEffect, useState } from 'react'
import {arrFav} from '../redux/action'
import { toFilterSort } from './functions'

export default function Favorites() {
  const dispatch = useDispatch()
  const myFavorites=useSelector(state=>state.myFavorites)
  const filterSortFav=useSelector(state=>state.filterSortFav)

  const [modify, setModify] = useState({
    gender: "sinFiltros",
    direction: "A",
  })

  function handleChange(event) {
    const name=event.target.name
    const value=event.target.value
    setModify({ ...modify, [name]: value })
    switch (name) {
      case "gender":
        dispatch(arrFav(toFilterSort(myFavorites,value,modify.direction)))
        break;
      case "direction":
        dispatch(arrFav(toFilterSort(myFavorites,modify.gender,value)))
        break;
      default:break;
    }
  }
  useEffect(()=>{
    //Se usa para hacer el renderizado cuando el filterSortFav se haya actualizado.Es necesario para cuando se haya agregado o retirado algún elemento de favoritos (cuando aún se mantiene en el array principal)
  },[filterSortFav])

  useEffect(()=>{
    dispatch(arrFav(toFilterSort(myFavorites,modify.gender,modify.direction)))
    //! El uso de la dependencia vacía es estríctamente necesaria para evitar la renderización infinita.
  },[])

  return (
    <div>
      <div className={styles.containerFiltro}>
        <div>
          <span>Gender: </span>
          <input type="radio" name='gender' onChange={handleChange} value='sinFiltros' id='sinFiltros' defaultChecked /><label htmlFor='sinFiltros'>👨‍👩‍👧‍👦</label>
          <input type="radio" name='gender' onChange={handleChange} value='Female' id='Female' /><label htmlFor='Female'>👩</label>
          <input type="radio" name='gender' onChange={handleChange} value='Male' id='Male' /><label htmlFor='Male'>👨</label>
          <input type="radio" name='gender' onChange={handleChange} value='Genderless' id='Genderless' /><label htmlFor='Genderless'>👽</label>
          <input type="radio" name='gender' onChange={handleChange} value='unknown' id='unknown' /><label htmlFor='unknown'>❓</label>
        </div>
        <div>
          <select name='direction' onChange={handleChange}>
            <option value="A">Orden Ascendente ⬆</option>
            <option value="D">Orden descendente ⬇</option>
          </select>
        </div>
      </div>
      <Cards characters={filterSortFav} />
    </div>
  )
}
