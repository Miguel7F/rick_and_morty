import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from "axios";

function App() {
   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      if (characters.some(character => character.id === Number(id))){
         window.alert('Ya encontraste este personaje');
   }else{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   }

   const onClose=(id)=> {
      const newCharacters = characters.filter(character => character.id !== Number(id))
      setCharacters(newCharacters)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
