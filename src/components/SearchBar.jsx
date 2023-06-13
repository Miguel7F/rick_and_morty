import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({ onSearch }) {
   let [id,setId]=useState("")

   function handleChange(event){
      setId(event.target.value)
   }
   return (
      <div className="search">
         <label> Insert to Id: </label>
         <input type='search' onChange={handleChange}  value={id} name="id" placeholder="Insert id..."/>
         <button onClick={()=>{onSearch(id);setId("")}}>Agregar</button>
      </div>
   );
}
