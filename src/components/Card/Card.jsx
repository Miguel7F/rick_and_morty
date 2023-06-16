import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props
   return (
      <div className={styles.card} key={id}>
         <div className={styles.containerImage}>
         <button className={styles.button} onClick={() => onClose(id)}>X</button>
         <NavLink to={`/detail/${id}`}> <img className={styles.image} src={image} alt={name} /></NavLink>
         </div>
         <div className={styles.containerText}>
            <NavLink to={`/detail/${id}`} className={styles.link}>   <h2 className={styles.name}>{name}</h2>   </NavLink>
            <p>Status: {status}</p>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin}</p>
         </div>
      </div>
   );
}
