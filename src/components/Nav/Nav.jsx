import styles from "./Nav.module.css"
import SearchBar from '../SearchBar/SearchBar.jsx';
import Cards from '../Cards/Cards.jsx';
import { Link } from 'react-router-dom';
import axios from "axios";
import React, { useState } from 'react';

export default function Nav() {

   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      if (characters.some(character => character.id === Number(id))) {
         window.alert('Ya agregaste este personaje');
      } else {
         axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               }
            })
            .catch(error => {
               if (error.response && error.response.status === 404) {
                  // Manejo del error 404
                  window.alert('No hay personajes con este ID');
               } else {
                  // Manejo de otros errores
                  window.alert('¡Houston tenemos un problema!');
               }
            });
      }
   }

   const onClose = (id) => {
      const newCharacters = characters.filter(character => character.id !== Number(id))
      setCharacters(newCharacters)
   }

   return (

      <div>
         <div className={styles.Nav}>
            <h1 className={styles.welcomeH1}>Busca tu personaje de Rick and Morty </h1>
            <SearchBar onSearch={onSearch} />
         </div>
         <Cards characters={characters} onClose={onClose} />
      </div>
   )
}

