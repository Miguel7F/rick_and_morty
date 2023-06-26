import { useDispatch, useSelector } from 'react-redux'
import Cards from './Cards'
import styles from '../styles/Favorites.module.css'
import { useEffect, useState } from 'react'
import { sortA,sortD } from '../redux/action'

export default function Favorites() {
  const dispatch = useDispatch()
  const myFavorites = useSelector(state => state.myFavorites)
  const filterSortFav = useSelector(state => state.filterSortFav)

  const [modify, setModify] = useState({
    gender: "sinFiltros",
    direction: "A",
  })

  function handleChange(event) {
    setModify({ ...modify, [event.target.name]: event.target.value })
    console.log( [event.target.name],event.target.value )
  }

  useEffect(() => {
    //una sola sentencia que filtra según el valor de gender 
    const toSort = modify.gender !== "sinFiltros" ?
      myFavorites.filter(fav => fav.gender === modify.gender) :
      myFavorites;
    modify.direction === "A" ? dispatch(sortA(toSort)) : dispatch(sortD(toSort))
  }, [modify])

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
            <option value="A">Orden Ascendente</option>
            <option value="D">Orden descendente</option>
          </select>
        </div>
      </div>
      <Cards characters={filterSortFav} />
    </div>
  )
}
