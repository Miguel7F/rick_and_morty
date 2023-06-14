import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")
   const randomNumber=Math.floor(Math.random()*825)+1
   function handleChange(event) {
      setId(event.target.value)
   }

   return (
      <div className="searchBar">
         <label>Search Bar:  </label>
            <input type='search' onChange={handleChange} value={id} name="id" placeholder="Insert id..." />
            <button key="btSearch" onClick={() => { onSearch(id); setId("") }}>Agregar</button>
            <button key="btRandom" onClick={() => { onSearch(randomNumber)} }>Random</button>
         


      </div>
   );
}
