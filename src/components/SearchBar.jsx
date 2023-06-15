import React, { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")

   function handleChange(event) {
      setId(event.target.value)
   }
   const randomNumber=Math.floor(Math.random()*825)+1

   return (
      <div className={styles.searchBar}>
         <div className={styles.divText}>Search Bar:  </div>
            <input className={styles.inputText} type='search' onChange={handleChange} value={id} name="id" placeholder="Insert id..." />
            <button className={styles.searchButton} key="btSearch" onClick={() => { onSearch(id); setId("") }}>Agregar</button>
            <button className={styles.searchButton} key="btRandom" onClick={() => { onSearch(randomNumber)} }>Random</button>
      </div>
   );
}
