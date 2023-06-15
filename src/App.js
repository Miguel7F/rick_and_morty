import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Error from './components/Error';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      if (characters.some(character => character.id === Number(id))){
         window.alert('Ya agregaste este personaje');
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
         <Routes>
         <Route path="/" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
