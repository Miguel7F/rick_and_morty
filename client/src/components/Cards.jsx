import { useDispatch } from "react-redux";
import Card from './Card'
import { removeCharacter, changeFav } from '../redux/action'
import styles from '../styles/Cards.module.css'
import axios from 'axios'

export default function Cards({ characters }) {
   const dispatch = useDispatch()

   async function onClose(id) {
      await axios.delete(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            dispatch(removeCharacter(data))
         })
         .catch(({ response }) => {
            alert(response.data)
         })
   }

   async function onFav(id) {
      await axios.put(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
           dispatch(changeFav(data))
         })
         .catch(({ response }) => {
            alert(response.data)
         })
   }
   function isFav(favorite) {
      return favorite ? "💖" : "🤍"
   }

   return (
      <div className={styles.cards}>{
         characters?.map(({ id, name, status, species, gender, origin, image, favorite }) => {
            return (<Card
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               isFav={isFav(favorite)}
               onClose={onClose}
               onFav={onFav}
            />);
         })
      }
      </div>
   );

}