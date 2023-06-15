import "./Card.css"
import { Link } from "react-router-dom";


export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props
   return (
      <div className="card" key={name}>
         <div class="circle-container">
         <button className="button" onClick={() => onClose(id)}>X</button>
            <img src={image} alt={name} />
         </div>
         <div className="containerText">
            <Link to={`/detail/${id}`}>   <h2>{name}</h2>   </Link>
            <p>Status: {status}</p>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin}</p>
         </div>
      </div>
   );
}
