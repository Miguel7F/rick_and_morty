import React from 'react'
import SearchBar from './SearchBar';
import styles from "./Nav.module.css"
import { Link } from 'react-router-dom';

export default function Nav({onSearch}) {
   return (
      <div className={styles.Nav}>
         
         <SearchBar onSearch={onSearch}/>
         <div className={styles.Nav}>
         <Link to="/about"> <button className={styles.navButton}>About</button> </Link>
         <Link to="/home">  <button className={styles.navButton}>Home</button>  </Link>
         </div>
      </div>
   )
}

