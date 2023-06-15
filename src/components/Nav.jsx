import React from 'react'
import SearchBar from './SearchBar';
import "./Nav.css"
import { Link } from 'react-router-dom';

export default function Nav({onSearch}) {
   return (
      <div className='Nav'>
         <SearchBar onSearch={onSearch}/>
         <Link to="/about">
            <button>About</button>
         </Link>
         <Link to="/home">
            <button>Home</button>
         </Link>
      </div>
   )
}

