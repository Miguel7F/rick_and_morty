import { useDispatch } from "react-redux";
import Card from './Card'
import { removeCharacter, changeFav } from '../redux/action'
import styles from '../styles/Cards.module.css'

export default function Cards({characters}) {
   const dispatch = useDispatch()

   function onClose(id) {
      dispatch(removeCharacter(id))
   }
   function onFav(id){
      dispatch(changeFav(id))
   }
   function isFav(favorite) {
      return favorite?"💖":"🤍"
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