import { NavLink } from "react-router-dom";
import styles from '../styles/Card.module.css'

export default function Card({ id, name, status, species, gender, origin, image, onClose, onFav, isFav }) {
   return (
      <div className={styles.card} key={id}>
         <div className={styles.containerImage}>
            <button className={styles.fav} onClick={() => onFav(id)}>{isFav}</button>
            <button className={styles.close} onClick={() => onClose(id)}>❌</button>
            <NavLink to={`/detail/${id}`} className={styles.link}> <img className={styles.image} src={image} alt={name} /></NavLink>
         </div>
         <div className={styles.containerText}>
            <h2>{name}</h2>
            <table>
               <thead>
                  <tr>
                     <th>Gender</th>
                     <th>Specie</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{gender}</td>
                     <td>{species}</td>
                     <td>{status}</td>
                  </tr>
                  <tr>
                     <th colSpan="3">Origin</th>
                  </tr>
                  <tr>
                     <td colSpan="3">{origin}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}