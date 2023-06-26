import { useSelector } from 'react-redux'
import Cards from './Cards'
import styles from '../styles/Favorites.module.css'
import { useEffect, useState } from 'react'

export default function Detail() {
  const myFavorites = useSelector(state => state.myFavorites)

  const [filterSort, setFilterSort] = useState({
    gender: "sinFiltros",
    direction: "A",
  })

  function handleChange(event) {
    setFilterSort({ ...filterSort, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    if (filterSort.gender !== "sinFiltros") {
      //const toSort=[...myFavorites.filter(fav => fav.gender === filterSort.gender)]
    }else{
      //const toSort=[myFavorites]
    }
  }, [filterSort])

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
      <Cards characters={myFavorites} />
    </div>
  )
}
