import React, { useEffect, useState } from 'react';
import styles from '../styles/SearchBar.module.css'
import Cards from './Cards'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter } from '../redux/action'
import {  useNavigate } from 'react-router-dom';

export default function SearchBar() {
   const navigate=useNavigate()
   const access = useSelector(state => state.access)
   const [id, setId] = useState("")
   const dispatch = useDispatch()
   const characters = useSelector(state => state.characters)

   useEffect(() => {
      axios.get(`http://localhost:3001/rickandmorty/character`)
         .then(({ data }) => {
            dispatch(addCharacter(data))
         })
         .catch(({ response }) => {
            alert(response.data)
         })
   }, [])

   function handleChange(event) {
      setId(event.target.value)
   }

   async function handleClic(event) {
      setId("")
      const { name } = event.target
      const enviarID = { id: name === 'add' ? Number(id) : Math.floor(Math.random() * 825) + 1 }
      if (enviarID.id < 1) alert('Solo se aceptan números mayores a cero (0)')

      else {
         await axios.post(`http://localhost:3001/rickandmorty/character`, enviarID)
            .then(({ data }) => {
               dispatch(addCharacter(data))
            })
            .catch(({ response }) => {
               alert(response.data)
            })
      }
   }
   useEffect(()=>{
      !access&&navigate("/")
   },[])
   
   return (
      <div className={access?undefined:styles.ocultarDiv}>
         <div className={styles.divText}>
            <span>Search Bar:</span>
            <input type='number' name="id" value={id} min="1"
               onChange={handleChange} placeholder="Insert id..." />
            <button key="btSearch" name="add" onClick={handleClic} >Agregar</button>
            <button key="btRandom" name="random" onClick={handleClic} >Random</button>
         </div>
         <Cards characters={characters} />
      </div>
   );
}
