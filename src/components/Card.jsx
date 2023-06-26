import { NavLink } from "react-router-dom";
import styles from '../styles/Card.module.css'

export default function Card({ id, name, status, species, gender, origin, image, onClose,onFav,isFav }) {
   return (
      <div className={styles.card} key={id}>
         <div className={styles.containerImage}>
            <button className={styles.fav} onClick={() => onFav(id)}>{isFav}</button>
            <button className={styles.close} onClick={() => onClose(id)}>x</button>
            <NavLink to={`/detail/${id}`} className={styles.link}> <img className={styles.image} src={image} alt={name} /></NavLink>
         </div>
         <div className={styles.containerText}>
            <h2 className={styles.name}>{name}</h2>
            <p>Status: {status}</p>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin}</p>
         </div>
      </div>
   );
}
