import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css'
import Cards from './Cards'
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter } from '../redux/action'

export default function SearchBar() {
   const dispatch = useDispatch()
   const characters = useSelector(state => state.characters)
   const myFavorites=useSelector(state=>state.myFavorites)
   
   // console.log("Characters --->",characters)
   // console.log("My favorites --->",myFavorites)

   const [id, setId] = useState(0)

   function handleChange(event) {
      setId(Number(event.target.value))
   }

   function handleClic(event) {
      //Función validar que determina si el personaje ya existe, para no duplicarlo.
      //Se llamará luego de otras validaciones
      function validar(id) {
         if (characters.some(char => char.id === id)) {
            window.alert('Este personaje ya fue agregado');
         } else {
            dispatch(addCharacter(id))
         }
      }
      //Se valida si el botón es "Agregar" o "Random".
      //Se establece condiciones para el ingreso del dato.
      if (event.target.name === "add") {
         if (id < 1 || id > 826 || !Number.isInteger(id)) {
            return window.alert('No hay personajes con este ID');
         } else {
            validar(id)
         }
      } else {
         validar(Math.floor(Math.random() * 825) + 1)
      }
   }

   return (
      <div>
         <div className={styles.divText}>
            <span>Search Bar:</span>
            <input type='number' name="id" onChange={handleChange} placeholder="Insert id..." />
            <button key="btSearch" name="add" onClick={handleClic} >Agregar</button>
            <button key="btRandom" name="random" onClick={handleClic} >Random</button>
         </div>
         <Cards characters={characters}/>
      </div>
   );
}
