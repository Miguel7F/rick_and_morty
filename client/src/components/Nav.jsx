import styles from '../styles/Nav.module.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {toAccess} from '../redux/action'

export default function Nav() {
   const dispatch=useDispatch()
   const navigate=useNavigate()

   function handleClick() {
      const userData={email:"",password:""}
      dispatch(toAccess(userData))
   }
   
   return (
      <div className={styles.Nav}>
         <NavLink to="/home" className={styles.link}>Home</NavLink>
         <NavLink to="/favorites" className={styles.link}>Favorites</NavLink>
         <NavLink to="/about" className={styles.link}>About Us</NavLink>
         <NavLink to="/" className={styles.link} onClick={handleClick}>Logout 🔐</NavLink>
      </div>
   )
}

