import React from 'react';
import styles from '../styles/App.module.css'
import { Routes, Route, useLocation} from 'react-router-dom';
import Nav from './Nav'
import Login from './Login'
import Error from './Error'
import About from  './About'
import SearchBar from './SearchBar'
import Detail from './Detail'
import Favorites from './Favorites'


function App() {
   const location = useLocation()
   return (
      <div className={styles.divApp}>
         {location.pathname !== "/" && <Nav/>}
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<Error />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<SearchBar />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
