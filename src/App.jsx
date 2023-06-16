import styles from './App.module.css';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error.jsx';
import Login from './components/Login/Login.jsx'
import Nav from './components/Nav/Nav.jsx'
import { Routes, Route, Link } from 'react-router-dom';

function App() {

   return (
      <div className={styles.divApp}>
         <div>
            <Link to="/home">  <button className={styles.navButton}>Home</button>  </Link>
            <Link to="/about"> <button className={styles.navButton}>About</button> </Link>
         </div>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path="/home" element={<Nav />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
